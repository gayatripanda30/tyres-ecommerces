import * as XLSX from "xlsx";

export const loadExcelData = async () => {
  try {
    // ✅ Fetch Excel file from public folder
    const response = await fetch("/products.xlsx");

    if (!response.ok) {
      throw new Error("Failed to load Excel file");
    }

    const arrayBuffer = await response.arrayBuffer();

    // ✅ Read workbook
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // ✅ Helper function to safely get sheet
    const getSheetData = (sheetName) => {
      const sheet = workbook.Sheets[sheetName];

      if (!sheet) {
        console.warn(`Sheet "${sheetName}" not found`);
        return [];
      }

      return XLSX.utils.sheet_to_json(sheet);
    };

    // ✅ Return all sheets (MATCH YOUR EXACT NAMES)
    return {
      accessories: getSheetData("Accessories"),
      tyres: getSheetData("Tyres"),
      batteries: getSheetData("Batteries"),
      lubricants: getSheetData("lubricants"), // ⚠️ MUST MATCH EXACT NAME
    };
  } catch (error) {
    console.error("❌ Excel Load Error:", error);

    return {
      accessories: [],
      tyres: [],
      batteries: [],
      lubricants: [],
    };
  }
};