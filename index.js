const cron = require('node-cron');
const { db } = require('./config/database');
const LatihanScheduler = require('./models/scheduleModel');

async function saveTimeToDatabase() {
    try {
      const now = new Date();
      const result = await LatihanScheduler.create({ waktu_sekarang: now });
      console.log(`Data berhasil disimpan dengan ID ${result.id}`);
    } catch (err) {
      console.error('Koneksi database gagal:', err);
    }
  }
  
  (async function() {
    try {
      await db.authenticate();
      console.log('Koneksi database berhasil');
  
      cron.schedule('*/5 * * * *', () => {
        console.log('Menyimpan waktu ke database...');
        saveTimeToDatabase();
      });
    } catch (err) {
      console.error('Koneksi database gagal:', err);
    } 
  })();
  

