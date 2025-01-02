const db = require('../database/database');

const getvenderuser = (req, res) => {
  const { prId, custOrgId } = req.query;

  if (!prId || !custOrgId) {
    return res.status(400).json({ error: 'missing parameter prId and custOrgId' });
  }

  const sqlQuery = `
    SELECT vu.VendorOrganizationId AS supplierId, vu.UserName, vu.Name
    FROM PrLineItems pli
    JOIN VendorUsers vu
      ON FIND_IN_SET(vu.VendorOrganizationId, pli.suppliers) > 0
    WHERE pli.purchaseRequestId = ?
      AND pli.custOrgId = ?
      AND vu.Role = 'Admin'
  `;

  db.execute(sqlQuery, [prId, custOrgId], (err, results) => {
    if (err) {
      console.error('error executing query:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No vendors found' });
    }

    res.json(results);
  });
};

module.exports = { getvenderuser };
