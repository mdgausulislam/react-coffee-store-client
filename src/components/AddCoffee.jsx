import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const formAddCoffee = event.target;
        const name = formAddCoffee.name.value;
        const quantity = formAddCoffee.quantity.value;
        const supplier = formAddCoffee.supplier.value;
        const taste = formAddCoffee.taste.value;
        const category = formAddCoffee.category.value;
        const details = formAddCoffee.details.value;
        const photo = formAddCoffee.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add COffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier Name" className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">A
                                Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste" className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Category" className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo Url" className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block bg-[#D2B48C]" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;