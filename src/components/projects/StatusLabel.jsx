import React from 'react';

const status = [
  { id: 1, name: "a fazer" },
  { id: 2, name: "fazendo" },
  { id: 3, name: "concluída" },
]

const StatusLabel = ({id}) => {
    return (
      <div>Status: {status.find(s => s.id === id).name}</div>
    );
}

export default StatusLabel;