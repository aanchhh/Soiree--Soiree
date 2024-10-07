document.addEventListener('DOMContentLoaded', () => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogsContainer = document.getElementById('blogs-container');
    blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        blogElement.innerHTML = `
            <h2>${blog.title}</h2>
            <div>${blog.date}</div>
            <div>${blog.content}</div>
        `;
        blogsContainer.appendChild(blogElement);
    });
});
