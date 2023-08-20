import React, { useState } from 'react'

export const AI = () => {
    const [show, setShow] = useState('')
    const itemsShow = (e) => {
        e.preventDefault();
        if (show == e.target.name) setShow('')
        else setShow(e.target.name);
    }
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-1 mt-12 mx-6 rounded'>
                {/* <div className='bg-blue-100'>
                    <h1 className='p-2'>adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper</h1>
                </div> */}
                <h1 className='m-2 bg-gray-200 font-semibold text-black p-2 font-lg rounded-md'>Try:</h1>
                <br></br>
                <form className='flex flex-column flex-wrap bg-pink-50' >
                    <div className='w-full'>
                        <button
                            className='p-1 m-2 bg-blue-500 text-white rounded-lg'
                            name='similarItems'
                            onClick={itemsShow}
                        >
                            {
                                show == 'similarItems' ? 'Hide Similar Items' :
                                    'Find Similar Items'
                            }
                        </button>
                    </div>
                    <div className='w-full'>
                        <button
                            className='p-1 m-2 bg-blue-500 text-white rounded-lg'
                            name='custReviews'
                            onClick={itemsShow}
                        >
                            {show == 'custReviews' ? 'Hide Customer Reviews' :
                                'Customer Reviews'
                            }
                        </button>
                    </div>
                    <div className='w-full'>
                        <button
                            className='p-1 m-2 bg-blue-500 text-white rounded-lg'
                            name='airec'
                            onClick={itemsShow}
                        >
                            {show == 'airec' ? 'Hide AI Recommendations' :
                                'AI Recommendations'
                            }
                        </button>
                    </div>


                </form>
            </div>
            <div className='flex items-center justify-center col-span-3'>
                {show == 'similarItems' ?
                    <div>
                        <h1>
                            Item is shown
                        </h1>
                    </div>
                    :
                    show == 'custReviews' ?
                        'Customer'
                        :
                        show == 'airec' ?
                            'AI Recommendations'
                            : ''
                }
            </div>
        </div>
    )
}
