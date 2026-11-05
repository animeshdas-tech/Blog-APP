import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import survice from './Config'
import Container from './Container'
import Post from './Post'
import LoginLayout from './LoginLayout'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function AllPosts({ colsNo }) {
    const userData = useSelector((state) => state.Auth.userData)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        survice.getPosts(userData?.uid).then((posts) => {
            if (posts) {
                setPosts(posts)
            }
        })
    }, [userData])
    console.log(colsNo);
    
    return userData ? (
        <div className='text-left'>
            <div>
                <div className='font-serif font-medium text-3xl my-2'>
                    Published Monographs
                </div>
                <div>
                    Peer-archived critical works
                </div>
            </div>
            {
                posts.length > 0 ? <Container>
                    <div className={`md:grid md:grid-cols-2 lg:grid-cols-${colsNo ? colsNo : 3} md:gap-10`}>
                        {
                            posts.map((post) => (
                                <div key={post.id}>
                                    <Post {...post} />
                                </div>
                            ))
                        }
                    </div>
                </Container>
                    : <div className='bg-white rounded-xl p-5 my-6'>
                        <div className={`lg:w-${colsNo ? 'full' : '3/5'} lg:mx-auto`}>
                            <div className='text-center text-green-900'>
                                AUTHOR DISPATCHES · BLANK LEDGER
                            </div>
                            <div className='font-serif text-3xl my-2 text-center font-bold'>
                                Your Archival Corpus Awaits Its First Dispatch
                            </div>
                            <div className='text-center my-2'>
                                Your catalog contains no recorded monographs or critical inquiries. Draft your initial treatise or manuscript notes under the auspices of the Digital Epistemics Working Group.
                            </div>
                            <div className='lg:flex lg:justify-center'>
                                <Button className='w-full lg:w-fit bg-green-900 md:hover:bg-green-900 text-green-100 h-fit' onClick={() => navigate('/AddPost')}>
                                    Compose Frist Monograph
                                </Button>
                            </div>
                        </div>
                        <div className={`lg:w-${colsNo ? 'full' : '4/5'} lg:flex lg:justify-between lg:mx-auto lg:gap-5`}>
                            <div className='bg-slate-100 rounded p-5 my-6'>
                                <div className='font-bold'>
                                    Import Manuscript
                                </div>
                                <div>
                                    Transcribe essays via standard Markdown, BibTeX bundles, or LaTeX syntax packages.
                                </div>
                            </div>
                            <div className='bg-slate-100 rounded p-5 my-6'>
                                <div className='font-bold'>
                                    Monograph Format
                                </div>
                                <div>
                                    Explore standard citation templates, metadata structures, and peer review requirements.
                                </div>
                            </div>
                            <div className='bg-slate-100 rounded p-5 my-6'>
                                <div className='font-bold'>
                                    Epistemic Tracks
                                </div>
                                <div>
                                    Browse active academic disciplines: Technē, Spatial Phenomenology, and Digital Urbanism.
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    ) : (
        <div>
            <LoginLayout />
        </div>
    )
}

export default AllPosts