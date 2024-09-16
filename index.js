const fs = require('fs');
//dosya yazma
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('employees.json dosyası oluşturuldu.');
}); 
//dosya okuma
fs.readFile('employees.json', 'utf8', (err,data) => {
    if (err) console.log(err);
    console.log('Dosya okundu\n' + data);
});
//dosyaya veri ekleme
fs.appendFile('employees.json', ', {"name": "Employee 2 Name", "salary": 3000}','utf8', (err,data) => {
    if (err) console.log(err);
    console.log('Dosya okundu\n' + data);
});
// dosya silme
setTimeout(() => {
    fs.unlink('employees.json',(err) => {
        if(err) console.log(err);
        console.log('Dosya Silindi.');
    });
}, 200);
