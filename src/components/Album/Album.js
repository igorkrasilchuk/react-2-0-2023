const Album = ({album}) => {
    const {id, userId, title} = album
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {Album};