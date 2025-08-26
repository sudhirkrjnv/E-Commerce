import { Cart } from "../models/cart.model";


export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    let cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      cart = await Cart.create({ userId, items: [] });
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

export const addToCart = async(req, res)=>{
    try {
        const { userId } = req.params;
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = await Cart.create({ userId, items: [] });
        }

        const existingItem = cart.items.find(cartItem => cartItem.productId.toString() === productId);

        if (existingItem) {
            existingItem.quantity += quantity || 1;
        } else {
            cart.items.push({ productId, quantity: quantity || 1 });
        }

        await cart.save();
        res.status(200).json({
            message: "Item added to cart successfully",
            success: true,
            cart
        });

    } catch (error) {
        res.status(500).json({ message: "Error updating quantity", error: error.message });
    }
}

export const updateQuantity = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Your Cart is empty" });

    const item = cart.items.find(item => item.productId.toString() === productId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({
        message: "Quantity updated successfully",
        success: true,
        cart
    });

  } catch (err) {
    res.status(500).json({ message: "Error updating quantity", error: err.message });
  }
}

export const removeIndividualProductFromCart = async(req, res)=>{
    try {
        const { userId, productId } = req.params;

        const cart = await Cart.findOneAndUpdate(
            { userId }, { $pull: { items: { productId } } },
            { new: true }
        );

        if (!cart) return res.status(404).json({ message: "Cart not found" });

        res.status(200).json({
            message: "Item removed successfully",
            success: true,
            cart
        });

    } catch (error) {
        res.status(500).json({ message: "Error removing item", error: error.message });
    }
}

export const clearCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOneAndUpdate(
        { userId }, { $set: { items: [] } },
        { new: true }
    );

    res.status(200).json({
        message: "Cart cleared successfully",
        success: true,
        cart
    });

  } catch (err) {
    res.status(500).json({ message: "Error clearing cart", error: err.message });
  }
}