const express = require('express');
const path = require('path');
const app = express();


//Static Folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));