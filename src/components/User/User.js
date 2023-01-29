const User = ({user}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>usename: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <hr/>
        </div>
    );
};

export {User};