const { Pool } = require('pg');

const config = {
  user: 'admin',
  host: 'localhost',
  password: 'admin',
  database: 'app_places'
};

const pool = new Pool(config);

const getPlace = async () => {
  try {
    const res = await pool.query('select * from places');
    console.log(res.rows);
  } catch (err) {
    console.log(err);
  }
};

const insertPlace = async () => {
  try {
    const text = 'INSERT INTO places(title, description, size, address, postal_code, price) VALUES($1, $2, $3, $4, $5, $6)';
    const values = ['Piso', 'Bonito', 90, 'calle vitoria', '30140', 320];
    const res = await pool.query(text, values);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async () => {
  try {
    const text = 'DELETE FROM places WHERE id = $1';
    const value = [2];
    const res = await pool.query(text, value);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getPlace();
deleteUser();
getPlace();
insertPlace();
getPlace();
