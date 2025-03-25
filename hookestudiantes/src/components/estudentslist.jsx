import React, { useState } from 'react';
import './EstudentsList.css';

const EstudentsList = () => {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        carnet: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddStudent = () => {
        if (formData.nombre && formData.edad && formData.carnet) {
            setStudents([...students, formData]);
            setFormData({ nombre: '', edad: '', carnet: '' }); // Limpiar el formulario

            // Agregar clase al body para el efecto de fondo
            document.body.classList.add('success-background');
            setTimeout(() => {
                document.body.classList.remove('success-background');
            }, 1000); // Duración del efecto (1 segundo)
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };

    return (
        <div className="container">
            <h1 className="title">Registro de Estudiantes</h1>
            <div className="form">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="input"
                />
                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    className="input"
                />
                <input
                    type="text"
                    name="carnet"
                    placeholder="Carnet"
                    value={formData.carnet}
                    onChange={handleInputChange}
                    className="input"
                />
                <button onClick={handleAddStudent} className="button">
                    Agregar
                </button>
            </div>
            <ul className="student-list">
                {students.map((student, index) => (
                    <li key={index} className="student-item">
                        {student.nombre} - {student.edad} años - {student.carnet}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EstudentsList;