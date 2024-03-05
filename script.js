function calcularSalario() {

    const tarifaHora = 10000;
    const nivel = document.getElementById('level').value;
    const horas = parseFloat(document.getElementById("hours").value);
    let salario = 0;

    if (nivel == 'tecnico') {
        salario = tarifaHora * horas;
    } else if (nivel == 'tecnologo') {
        salario = (tarifaHora + 4.5) * horas;
    } else if (nivel == "profesional") {
        salario = (tarifaHora + 6.8) * horas;
    }

    if (horas > 48) {
        const horasExtra = horas - 48;
        const salarioExtra = horasExtra * (tarifaHora * 1.5);
        salario += salarioExtra;
    }

    // Deducciones por ley 

    const deducciones = salario * 0.04; // 4% de deducciones
    salario -= deducciones;

    document.getElementById("resultado").innerHTML = `
        <h2>Detalle del Salario</h2>
        <p>Nivel de Formación: ${nivel}</p>
        <p>Horas Trabajadas: ${horas}</p>
        <p>Salario Base: $${(tarifaHora * horas).toFixed(2)}</p>
        <p>Salario Total: $${salario.toFixed(2)}</p>
        <p>Deducciones: $${deducciones.toFixed(2)}</p>
    `;
}