const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema(
    {
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        category: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        listingPhotoPaths: [{ type: String }], // Store photo URLs
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;
