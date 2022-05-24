const router = require("express").Router();
const Cart=require("../models/Cart");
const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");


router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedCart);
        } catch (err) {
            res.status(500).json(err);
        }
});
//User Cart
router.get("/find/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const cart = await Cart.findOne({userId:req.params.userId});
        res.status(200).json(cart);
      } catch (err) {
        res.status(500).json(err);
      }
})
//All Products
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;