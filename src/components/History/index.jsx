import React from "react";

const History = ({ match, location, history }) => (
    <div>
        <p><strong>Match:</strong> {JSON.stringify(match)}</p>
        <p><strong>Location:</strong> {JSON.stringify(location)}</p>
        <p><strong>History:</strong> {JSON.stringify(history)}</p>
    </div>
);

export default History;
