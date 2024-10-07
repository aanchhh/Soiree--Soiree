const quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Write your blog here...',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['link', 'image', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }]
        ]
    }
});

document.getElementById('save-draft').addEventListener('click', saveDraft);
document.getElementById('publish-blog').addEventListener('click', publishBlog);
document.getElementById('view-drafts').addEventListener('click', viewDrafts);
function saveDraft() {
    const title = document.getElementById('blog-title').value;
    const content = quill.root.innerHTML;
    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
    drafts.push({ title, content, date: new Date().toLocaleString() });
    localStorage.setItem('drafts', JSON.stringify(drafts));
    alert('Draft saved!');
}

function publishBlog() {
    const title = document.getElementById('blog-title').value;
    const content = quill.root.innerHTML;
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push({ title, content, date: new Date().toLocaleString() });
    localStorage.setItem('blogs', JSON.stringify(blogs));
    alert('Blog published!');
    updateBlogsHtml();
}

function viewDrafts() {
    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
    const draftsContainer = document.getElementById('drafts-container');
    draftsContainer.innerHTML = '';
    
    drafts.forEach((draft, index) => {
        const draftElement = document.createElement('div');
        draftElement.classList.add('draft');
        
        // HTML structure with proper classes for styling
        draftElement.innerHTML = `
            <div class="draft-content">
                <div class="draft-header">
                    <h2 class="draft-title">${draft.title}</h2>
                    <div class="draft-date">${draft.date}</div>
                </div>
                <div class="draft-body">${draft.content}</div>
                <div class="draft-actions">
                    <button class="edit-draft" data-index="${index}">Edit Draft</button>
                    <button class="delete-draft" data-index="${index}">Delete Draft</button>
                </div>
            </div>
        `;
        draftsContainer.appendChild(draftElement);
    });

    document.querySelectorAll('.edit-draft').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const draft = drafts[index];
            if (draft) {
                document.getElementById('blog-title').value = draft.title;
                quill.root.innerHTML = draft.content;
            }
        });
        document.querySelector('.edit-draft').style.Color = '#262626';
        document.querySelector('.edit-draft').style.backgroundColor = '#E5E1D8';
        document.querySelector('.edit-draft').style.fontFamily = 'charm';
    });

    document.querySelectorAll('.delete-draft').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            drafts.splice(index, 1);
            localStorage.setItem('drafts', JSON.stringify(drafts));
            viewDrafts();
        });
        document.querySelector('.delete-draft').style.Color = '#262626';
        document.querySelector('.delete-draft').style.backgroundColor = '#E5E1D8';
        document.querySelector('.delete-draft').style.fontFamily = 'charm';
    });
}

function updateBlogsHtml() {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogsContainer = document.getElementById('blogs-container');
    if (blogsContainer) {
        blogsContainer.innerHTML = '';
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
    }
}
