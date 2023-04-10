const express = require("express");

const app = express();

app.use(express.json());

// cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// servidor
app.listen(3000, () => {
  console.log("Servidor arriba en el puerto 3000");
});

// funcion validar numeros

function validarNumeros(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  } else {
    return true;
  }
}

// metodos

app.post("/calculadora/sumar", (req, res) => {
  try {
    let resultado;
    const { num1, num2 } = req.body;
    const resultadoValidar = validarNumeros(parseFloat(num1), parseFloat(num2));

    if (resultadoValidar) {
      resultado = parseFloat(num1) + parseFloat(num2);
    } else {
      throw new Error("Debes ingresar solo numeros");
    }

    res.json({ resultado });
  } catch (error) {
    res.json({ resultado: error.message });
  }
});

app.post("/calculadora/restar", (req, res) => {
  try {
    let resultado;
    const { num1, num2 } = req.body;
    const resultadoValidar = validarNumeros(parseFloat(num1), parseFloat(num2));

    if (resultadoValidar) {
      resultado = parseFloat(num1) - parseFloat(num2);
    } else {
      throw new Error("Debes ingresar solo numeros");
    }

    res.json({ resultado });
  } catch (error) {
    res.json({ resultado: error.message });
  }
});

app.post("/calculadora/multiplicar", (req, res) => {
  try {
    let resultado;
    const { num1, num2 } = req.body;
    const resultadoValidar = validarNumeros(parseFloat(num1), parseFloat(num2));

    if (resultadoValidar) {
      resultado = parseFloat(num1) * parseFloat(num2);
    } else {
      throw new Error("Debes ingresar solo numeros");
    }

    res.json({ resultado });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/calculadora/dividir", (req, res) => {
  try {
    let resultado;
    const { num1, num2 } = req.body;
    const resultadoValidar = validarNumeros(parseFloat(num1), parseFloat(num2));

    if (resultadoValidar) {
      resultado = parseFloat(num1) / parseFloat(num2);
    } else {
      throw new Error("Debes ingresar solo numeros");
    }

    if (num2 == 0) {
      throw new Error("El divisor (NUMERO 2) no puede ser igual a 0");
    }

    res.json({ resultado });
  } catch (error) {
    res.json({ resultado: error.message });
  }
});
