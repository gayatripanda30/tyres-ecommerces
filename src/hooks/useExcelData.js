import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

/**
 * Custom hook for loading and parsing Excel data from a given URL and sheet name.
 * @param {string} url - The URL of the Excel file.
 * @param {string} sheetName - The name of the sheet to read.
 * @param {function} formatter - Optional function to format the data.
 * @returns {object} { data, loading, error }
 */
const useExcelData = (url, sheetName, formatter = (item) => item) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[sheetName];
        if (!worksheet) {
          throw new Error(`Sheet "${sheetName}" not found in the Excel file.`);
        }
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        const formattedData = jsonData.map(formatter);
        setData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [url, sheetName, formatter]);

  return { data, loading, error };
};

export default useExcelData;