import React from "react";
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View } from '@react-pdf/renderer';

const MyTable = () => {
    // Define your table data here
    const tableData = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Bob", age: 45 }
    ];

    // Define your table header
    const tableHeader = ["Name", "Age"];

    return (
        <div>
            <table>
                <thead>
                <tr>
                    {tableHeader.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <PDFDownloadLink document={<MyPDF tableData={tableData} tableHeader={tableHeader} />} fileName="myTable.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download PDF"
                }
            </PDFDownloadLink>
        </div>
    );
};

const MyPDF = ({ tableData, tableHeader }) => (
    <Document>
        <Page size="A4">
            <View>
                <Text>My Table</Text>
                <table>
                    <thead>
                    <tr>
                        {tableHeader.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </View>
        </Page>
    </Document>
);

export default MyTable;