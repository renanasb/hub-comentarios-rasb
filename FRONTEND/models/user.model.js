class User {
    constructor(id, username, password, firstname, lastname) {
        if (id !== undefined, username !== undefined, password !== undefined, firstname !== undefined, lastname !== undefined) {
            this.id = id;
            this.username = username;
            this.password = password;
            this.firstname = firstname;
            this.lastname = lastname;

        } else if (username !== undefined && password !== undefined) {
            this.id = null;
            this.username = username;
            this.password = password;
            this.firstname = null;
            this.lastname = null;
        } else {
            this.id = null;
            this.username = null;
            this.password = null;
            this.firstname = null;
            this.lastname = null;
        }
    }


    getId() {
        return this.id;
        
    } 

    setId(id) {
        this.id = id;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
    }
}

export { User}