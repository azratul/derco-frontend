import React, { useContext } from 'react';
import { ProfileContext } from '../App';
import '../styles/Posts.css';

const Posts = () => {
    const posts = useContext(ProfileContext);
    const Posts = posts.posts;
    return (
        <>
            <section className="Posts">
                <h3>Posts from Lambda - Stage {`<${posts.stage}>`}</h3>
                <div className="Items">
                    {Posts.map((post, index) => (
                        <div className="Card" key={index}>
                            <h2>#{post.id} <b>{post.title}</b></h2>
                            <p>{post.body}</p>
                            <h2>Author: {post.user.name}
                                <a href={`mailto:${post.user.email}`}>{post.user.email}</a></h2>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};

export default Posts;
