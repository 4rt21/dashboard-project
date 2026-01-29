import { useState } from "react";
import { UserRoundSearch, List, X } from "lucide-react";
import Header from "../components/Header";

export default function FindStudentPage() {
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("table"); // "table" or "list"

  // Sample student data - replace with your actual data source
  const studentData = [
    { id: 1, genero: "M", grupo: "A", id_docente: 2, monedas: 950, numero_lista: "1", nombre: "Juan Pérez" },
    { id: 2, genero: "F", grupo: "B", id_docente: 3, monedas: 880, numero_lista: "1", nombre: "María García" },
    { id: 3, genero: "M", grupo: "A", id_docente: 2, monedas: 820, numero_lista: "2", nombre: "Carlos López" },
    { id: 4, genero: "F", grupo: "B", id_docente: 3, monedas: 760, numero_lista: "2", nombre: "Ana Martínez" },
    { id: 5, genero: "M", grupo: "A", id_docente: 2, monedas: 720, numero_lista: "3", nombre: "Luis Rodríguez" },
    { id: 6, genero: "F", grupo: "B", id_docente: 3, monedas: 680, numero_lista: "3", nombre: "Sofia Hernández" },
    { id: 7, genero: "M", grupo: "A", id_docente: 2, monedas: 640, numero_lista: "4", nombre: "Diego González" },
    { id: 8, genero: "F", grupo: "B", id_docente: 3, monedas: 590, numero_lista: "4", nombre: "Laura Díaz" },
    { id: 9, genero: "M", grupo: "A", id_docente: 2, monedas: 540, numero_lista: "5", nombre: "Miguel Torres" },
    { id: 10, genero: "F", grupo: "B", id_docente: 3, monedas: 500, numero_lista: "5", nombre: "Carmen Ruiz" },
    { id: 11, genero: "M", grupo: "A", id_docente: 2, monedas: 460, numero_lista: "6", nombre: "Pedro Ramírez" },
    { id: 12, genero: "F", grupo: "B", id_docente: 3, monedas: 420, numero_lista: "6", nombre: "Isabel Flores" },
    { id: 13, genero: "M", grupo: "A", id_docente: 2, monedas: 380, numero_lista: "7", nombre: "Javier Morales" },
    { id: 14, genero: "F", grupo: "B", id_docente: 3, monedas: 340, numero_lista: "7", nombre: "Patricia Vargas" },
    { id: 15, genero: "M", grupo: "A", id_docente: 2, monedas: 300, numero_lista: "8", nombre: "Antonio Castillo" },
    { id: 16, genero: "F", grupo: "B", id_docente: 3, monedas: 260, numero_lista: "8", nombre: "Rosa Jiménez" },
    { id: 17, genero: "M", grupo: "A", id_docente: 2, monedas: 220, numero_lista: "9", nombre: "Fernando Ortiz" },
    { id: 18, genero: "F", grupo: "B", id_docente: 3, monedas: 180, numero_lista: "9", nombre: "Claudia Muñoz" },
    { id: 19, genero: "M", grupo: "A", id_docente: 2, monedas: 140, numero_lista: "10", nombre: "Roberto Salas" },
    { id: 20, genero: "F", grupo: "B", id_docente: 3, monedas: 100, numero_lista: "10", nombre: "Gabriela Vega" }
  ];

  // Filter students based on search input
  const filteredStudents = studentData.filter((student) => {
    if (searchInput === "") return true;

    return (
      student.nombre.toLowerCase().includes(searchInput.toLowerCase()) ||
      student.genero.toLowerCase().includes(searchInput.toLowerCase()) ||
      student.grupo.toLowerCase().includes(searchInput.toLowerCase()) ||
      student.numero_lista.includes(searchInput) ||
      student.id.toString().includes(searchInput)
    );
  });

  const toggleViewMode = () => {
    setViewMode(viewMode === "table" ? "list" : "table");
  };

  const clearSearch = () => {
    setSearchInput("");
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="relative flex items-center">
            <UserRoundSearch
              color="#6366f1"
              size={24}
              className="absolute left-4 z-10"
            />
            <input
              className="w-full bg-gray-800 text-gray-300 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-4 pl-12 pr-12 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              type="text"
              placeholder="Busca al estudiante por nombre, numero de lista o grupo"
              name="text"
              id="student"
            />
            {searchInput && (
              <X
                size={20}
                className="absolute right-14 text-gray-400 cursor-pointer hover:text-gray-200"
                onClick={clearSearch}
              />
            )}
            <button
              className="absolute right-4 p-1 rounded-md hover:bg-gray-700 transition-colors"
              onClick={toggleViewMode}
              title={
                viewMode === "table"
                  ? "Switch to list view"
                  : "Switch to table view"
              }
            >
              <List size={22} color="#6366f1" />
            </button>
          </div>
        </div>

        {/* Results section */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl border border-gray-700 shadow-lg overflow-hidden">
          {/* Results Header */}
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-indigo-400">
              Student Results
            </h2>
            <div className="text-gray-400">
              {filteredStudents.length}{" "}
              {filteredStudents.length === 1 ? "student" : "students"} found
            </div>
          </div>

          {/* No Results Message */}
          {filteredStudents.length === 0 && (
            <div className="p-8 text-center text-gray-400">
              <p>No students match your search criteria</p>
            </div>
          )}

          {/* Table View */}
          {viewMode === "table" && filteredStudents.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 bg-opacity-60">
                  <tr className="text-left">
                    <th className="p-4 font-medium">ID</th>
                    <th className="p-4 font-medium">Nombre</th>
                    <th className="p-4 font-medium">Gender</th>
                    <th className="p-4 font-medium">Group</th>
                    <th className="p-4 font-medium">List Number</th>
                    <th className="p-4 font-medium">Coins</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="border-t border-gray-700 hover:bg-gray-700 hover:bg-opacity-30 transition-colors cursor-pointer"
                    >
                      <td className="p-4">{student.id}</td>
                      <td className="p-4">{student.nombre}</td>
                      <td className="p-4">{student.genero}</td>
                      <td className="p-4">{student.grupo}</td>
                      <td className="p-4">{student.numero_lista}</td>
                      <td className="p-4">{student.monedas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && filteredStudents.length > 0 && (
            <div className="divide-y divide-gray-700">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="p-4 hover:bg-gray-700 hover:bg-opacity-30 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-indigo-300">
                        {student.nombre}
                      </h3>
                      <p className="text-gray-400">
                        {student.genero === "M" ? "Mr." : "Ms."} - Group: {student.grupo}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        ID: {student.id}
                      </div>
                      <div className="text-sm text-gray-400">
                        Coins: {student.monedas}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
