const ContactListName = 'contactList'

function createContact(contactData) {
    let contacList = localStorage.getItem(ContactListName) != null ?  JSON.parse(localStorage.getItem(ContactListName)) : [];
    let maxID = 0;
    if(contacList.length > 0)
    {
        maxID = contacList[contacList.length-1].id;
    }
    contactData.id = maxID +1;
    contacList.push(contactData);
    localStorage.setItem(ContactListName, JSON.stringify(contacList));
}

function getContactList() {
    return JSON.parse(localStorage.getItem(ContactListName));
}

function editContact(contactData) {
    let contactList = JSON.parse(localStorage.getItem(ContactListName));

    contactList = contactList.map(item => {
        if(item.id == contactData.id) item = contactData;
        return item;
    })
    localStorage.setItem(ContactListName, JSON.stringify(contactList));        
}

function deleteContact(id) {
    let contactList = JSON.parse(localStorage.getItem(ContactListName));
    contactList = contactList.filter(x => x.id != id);
    localStorage.setItem(ContactListName, JSON.stringify(contactList));
    document.querySelector(`[data-id="${id}"]`).remove();
}


