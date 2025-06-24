import React, { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase/connection';
import styles from './Brand.module.css';

const Product = () => {
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productUnit, setProductUnit] = useState('');
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const productsCollection = collection(db, 'products');
  const brandsCollection = collection(db, 'brands');

  // Carrega marcas para combobox
  useEffect(() => {
    const q = query(brandsCollection, orderBy('name'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBrands(list);
    });
    return () => unsubscribe();
  }, []);

  // Carrega lista de produtos
  useEffect(() => {
    const q = query(productsCollection, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(list);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !productBrand || !productPrice || !productUnit) {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      if (editId) {
        const productRef = doc(db, 'products', editId);
        await updateDoc(productRef, {
          name: productName,
          brand: productBrand,
          price: parseFloat(productPrice),
          unit: parseInt(productUnit, 10),
        });
        setMessage('Produto atualizado com sucesso!');
        setEditId(null);
      } else {
        await addDoc(productsCollection, {
          name: productName,
          brand: productBrand,
          price: parseFloat(productPrice),
          unit: parseInt(productUnit, 10),
          createdAt: Timestamp.now(),
        });
        setMessage('Produto cadastrado com sucesso!');
      }

      // Limpa formulário
      setProductName('');
      setProductBrand('');
      setProductPrice('');
      setProductUnit('');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      setMessage('Erro ao salvar o produto.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setProductName(product.name);
    setProductBrand(product.brand);
    setProductPrice(product.price);
    setProductUnit(product.unit);
    setEditId(product.id);
    setMessage('');
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
    if (!confirmDelete) return;

    try {
      const productRef = doc(db, 'products', id);
      await deleteDoc(productRef);
      setMessage('Produto excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      setMessage('Erro ao excluir o produto.');
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.formWrapper}>
      <h2><center>{editId ? 'Editar Produto' : 'Cadastrar Produto'}</center></h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nome do Produto:
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label>
          Marca:
          <select
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
          >
            <option value="">Selecione uma marca</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Preço:
          <input
            type="number"
            placeholder="Digite o preço"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>

        <label>
          Unidade:
          <input
            type="number"
            placeholder="Digite a quantidade"
            value={productUnit}
            onChange={(e) => setProductUnit(e.target.value)}
          />
        </label>

        <button type="submit" className={styles.btn} disabled={loading}>
          {editId ? 'Atualizar' : 'Cadastrar'}
        </button>
      </form>

      <input
        type="text"
        placeholder="Buscar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />

      {message && <p>{message}</p>}

      <h3>Produtos cadastrados:</h3>
      <ul className={styles.list}>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - {product.brand} - R${product.price} ({product.unit} unidades)
              {product.createdAt && (
                <small style={{ marginLeft: '10px', color: '#666' }}>
                  ({product.createdAt.toDate().toLocaleDateString()})
                </small>
              )}
            </span>
            <div>
              <button onClick={() => handleEdit(product)} className={styles.btnEdit}>Editar</button>
              <button onClick={() => handleDelete(product.id)} className={styles.btnDelete}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
