//initialize Alpine
document.addEventListener('alpine:init', () => {

    // Alpine Data => users
    Alpine.data('users', () => ({
        title: 'Hallo Word'
        // nameUser: ''
    }))

    //Alpine Data => 
    // Alpine.data('program', () => ({
    //     title: 'Cengcorang Ghoib'
    // }))
    
})

document.addEventListener('alpine:init', () => {

    // Alpine Data => users
    // Alpine.data('users', () => ({
    //     title: 'I ❤️ Alpine'
    // }))

    //Alpine Data => 
    Alpine.data('program', () => ({
        title: 'Hallo Mars'
    }))
    
})