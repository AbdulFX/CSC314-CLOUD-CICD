const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(' this is CSC 314 cloud computing DEVOPS ; CI-CD PIPELINE CREATED WITH AWS. YHIS PAGE INDICATES SUCCESS. OBI ISRAEL CHIBUIKE AND ABDULLAHI MOHAMMED, VUG/CS/21/5208 AND VUG/CSC/21/5157 '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);