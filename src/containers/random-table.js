import React, {useMemo} from 'react';

const getRandomString = () => Math.random().toString(36).substring(2, 8);

const RandomTable = () => {
    // Generate random headers
    const headers = useMemo(() => {
        return Array.from({length: 5}, () => getRandomString());
    }, [])

    // Generate random rows
    const rows = useMemo(() => {
        return Array.from({length: 20}, () => Array.from({length: 5}, () => getRandomString()));
    }, [])

    return (
        <table border="1">
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default RandomTable;