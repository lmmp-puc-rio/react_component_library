//Toast possible alert types
// Function to check API data response and throw a Toast alert
let toastProperties = null;
function showToast(data,toastList,setToastList) {
    
    switch(data.type) {
        case 'success':
        toastProperties = {
            id: toastList.length+1,
            title: data.title,
            description: data.description,
            backgroundColor: '#5cb85c'
        }
        break;
        case 'error':
        toastProperties = {
            id: toastList.length+1,
            title: data.title,
            description: data.description,
            backgroundColor: '#d9534f'
        }
        break;
        case 'info':
        toastProperties = {
            id: toastList.length+1,
            title: data.title,
            description: data.description,
            backgroundColor: '#5bc0de'
        }
        break;
        case 'warning':
        toastProperties = {
            id: toastList.length+1,
            title: data.title,
            description: data.description,
            backgroundColor: '#f0ad4e'
        }
        break;
        default:
        toastProperties = [];
    }
    setToastList([...toastList, toastProperties]);
};

export {showToast};