const pgp = require('pg-promise')();
var db = pgp('postgres://zxsbvfocaemzby:d1645124538119110cd38631af5212c7da75b480d786f19b8effcc3433d1dafd@ec2-54-243-147-162.compute-1.amazonaws.com:5432/dnaovudsp0d1v?ssl=true');


//products
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}
function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateProduct(req, res) {
    db.none('update products set id=${id} ,title= ${title},price= ${price}, tags= ${tags}' + 'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deleteProduct(req, res) {
    db.none('delete from products' + 'where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
module.exports = {
    //products
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    //purchase_items
    getAllPurchase_items,
    getPurchase_itemsByID,
    insertPurchase_items,
    updatePurchase_items,
    deletePurchase_items,
    //purchases
    getAllPurchases,
    getPurchasesByID,
    insertPurchases,
    updatePurchases,
    deletePurchases

}
//purchase_items
function getAllPurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_items id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase_items id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}
function insertPurchase_items(req, res) {
    db.none('insert into purchase_items(id, purchase_id, product_id, price, quantity)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatePurchase_items(req, res) {
    db.none('update purchase_items set id=${id} ,purchase_id= ${purchase_id},product_id= ${product_id}, price= ${price}, quantity= ${quantity}' + 'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deletePurchase_items(req, res) {
    db.none('delete from purchase_items' + 'where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//purchases
function getAllPurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getPurchasesByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}
function insertPurchases(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatePurchases(req, res) {
    db.none('update products set id=${id} ,title= ${title},price= ${price}, tags= ${tags}' + 'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deletePurchases(req, res) {
    db.none('delete from products' + 'where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}