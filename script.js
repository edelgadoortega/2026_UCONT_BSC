const perspectives = [
  {
    id: "financiera",
    name: "Financiera",
    color: "#143c63",
    metricType: "higher",
    unit: "%",
    metaNumber: 80,
    correct: {
      objective: "Incrementar la rentabilidad prudente de la cartera de creditos MYPE",
      indicator: "Porcentaje de cartera de creditos MYPE con margen neto positivo y mora controlada",
      target: "Lograr que al menos el 80% de la cartera de creditos MYPE tenga margen neto positivo y mora controlada",
      initiatives: [
        "Implementar pricing crediticio ajustado al riesgo.",
        "Fortalecer alertas tempranas de deterioro crediticio.",
        "Priorizar segmentos MYPE con buen historial de pago."
      ]
    },
    alternatives: {
      objectives: [
        "Incrementar la rentabilidad prudente de la cartera de creditos MYPE",
        "Aumentar la satisfaccion de los clientes MYPE digitales",
        "Optimizar la velocidad de atencion en plataforma digital",
        "Fortalecer la cultura organizacional de innovacion financiera"
      ],
      indicators: [
        "Porcentaje de cartera de creditos MYPE con margen neto positivo y mora controlada",
        "Numero de reclamos digitales resueltos por mes",
        "Horas promedio de evaluacion crediticia digital",
        "Porcentaje de colaboradores certificados en ventas consultivas"
      ],
      targets: [
        "Lograr que al menos el 80% de la cartera de creditos MYPE tenga margen neto positivo y mora controlada",
        "Reducir el tiempo promedio de evaluacion crediticia digital a 24 horas o menos",
        "Alcanzar 90% de satisfaccion general en todos los canales",
        "Certificar al 85% de colaboradores en scoring y asesoria MYPE"
      ],
      initiatives: [
        "Implementar pricing crediticio ajustado al riesgo.",
        "Fortalecer alertas tempranas de deterioro crediticio.",
        "Priorizar segmentos MYPE con buen historial de pago.",
        "Lanzar una campana masiva de redes sociales sin segmentacion.",
        "Renovar la identidad visual de todas las agencias.",
        "Reducir capacitaciones para disminuir costos operativos."
      ]
    }
  },
  {
    id: "cliente",
    name: "Cliente",
    color: "#c46a16",
    metricType: "higher",
    unit: "%",
    metaNumber: 75,
    correct: {
      objective: "Incrementar la lealtad de los clientes MYPE digitales",
      indicator: "Porcentaje de clientes MYPE digitales con recomendacion favorable",
      target: "Alcanzar que al menos el 75% de clientes MYPE digitales recomiende la financiera",
      initiatives: [
        "Redisenar la experiencia digital del cliente MYPE.",
        "Implementar seguimiento posdesembolso personalizado.",
        "Crear un programa de beneficios para clientes recurrentes."
      ]
    },
    alternatives: {
      objectives: [
        "Incrementar la lealtad de los clientes MYPE digitales",
        "Optimizar la rentabilidad prudente de la cartera de creditos MYPE",
        "Reducir el tiempo interno de evaluacion documentaria",
        "Fortalecer la especializacion de los analistas de riesgos"
      ],
      indicators: [
        "Porcentaje de clientes MYPE digitales con recomendacion favorable",
        "Porcentaje de cartera MYPE con margen neto positivo",
        "Numero de cursos dictados a colaboradores administrativos",
        "Horas promedio de evaluacion crediticia digital con decision final"
      ],
      targets: [
        "Alcanzar que al menos el 75% de clientes MYPE digitales recomiende la financiera",
        "Lograr que al menos el 80% de la cartera MYPE tenga margen neto positivo",
        "Reducir la evaluacion crediticia digital a 24 horas o menos",
        "Atender todos los reclamos sin diferenciar segmentos de clientes"
      ],
      initiatives: [
        "Redisenar la experiencia digital del cliente MYPE.",
        "Implementar seguimiento posdesembolso personalizado.",
        "Crear un programa de beneficios para clientes recurrentes.",
        "Subir tasas de interes de forma uniforme para todos los clientes.",
        "Automatizar exclusivamente procesos contables internos.",
        "Medir solo el numero total de descargas de la aplicacion."
      ]
    }
  },
  {
    id: "procesos",
    name: "Procesos internos",
    color: "#157347",
    metricType: "lower",
    unit: "horas",
    metaNumber: 24,
    correct: {
      objective: "Optimizar la eficiencia del proceso de evaluacion crediticia digital",
      indicator: "Horas promedio del proceso de evaluacion crediticia digital con decision final",
      target: "Reducir el tiempo promedio de evaluacion crediticia digital a 24 horas o menos",
      initiatives: [
        "Automatizar la validacion documental.",
        "Implementar scoring crediticio digital.",
        "Integrar bases de datos internas y externas para evaluacion de riesgo."
      ]
    },
    alternatives: {
      objectives: [
        "Optimizar la eficiencia del proceso de evaluacion crediticia digital",
        "Incrementar la lealtad de los clientes MYPE digitales",
        "Maximizar la rentabilidad de toda la empresa sin restricciones",
        "Fortalecer la motivacion del personal administrativo"
      ],
      indicators: [
        "Horas promedio del proceso de evaluacion crediticia digital con decision final",
        "Porcentaje de clientes MYPE digitales con recomendacion favorable",
        "Porcentaje de cartera con mora vencida sin segmentacion",
        "Numero de eventos de integracion interna realizados al ano"
      ],
      targets: [
        "Reducir el tiempo promedio de evaluacion crediticia digital a 24 horas o menos",
        "Alcanzar que al menos el 75% de clientes MYPE recomiende la financiera",
        "Incrementar en 20% el numero de solicitudes recibidas por campana",
        "Certificar al 85% de colaboradores comerciales y de riesgos"
      ],
      initiatives: [
        "Automatizar la validacion documental.",
        "Implementar scoring crediticio digital.",
        "Integrar bases de datos internas y externas para evaluacion de riesgo.",
        "Abrir nuevas agencias sin modificar el flujo de evaluacion.",
        "Crear un programa de descuentos para clientes recurrentes.",
        "Evaluar solicitudes solo por orden de llegada sin segmentacion."
      ]
    }
  },
  {
    id: "aprendizaje",
    name: "Aprendizaje y crecimiento",
    color: "#1a8fbf",
    metricType: "higher",
    unit: "%",
    metaNumber: 85,
    correct: {
      objective: "Fortalecer la especializacion de los colaboradores comerciales y de riesgos",
      indicator: "Porcentaje de colaboradores comerciales y de riesgos con certificacion en scoring y asesoria MYPE",
      target: "Certificar al menos al 85% de colaboradores comerciales y de riesgos en scoring y asesoria MYPE",
      initiatives: [
        "Crear una escuela interna de asesores financieros MYPE.",
        "Desarrollar rutas de certificacion en scoring y gestion de riesgos.",
        "Capacitar en ventas consultivas y atencion digital."
      ]
    },
    alternatives: {
      objectives: [
        "Fortalecer la especializacion de los colaboradores comerciales y de riesgos",
        "Incrementar la rentabilidad prudente de la cartera de creditos MYPE",
        "Optimizar el proceso de evaluacion crediticia digital",
        "Aumentar la lealtad de los clientes MYPE digitales"
      ],
      indicators: [
        "Porcentaje de colaboradores comerciales y de riesgos con certificacion en scoring y asesoria MYPE",
        "Porcentaje de clientes digitales con recomendacion favorable",
        "Horas promedio del proceso de evaluacion crediticia digital",
        "Porcentaje de cartera de creditos MYPE con margen neto positivo"
      ],
      targets: [
        "Certificar al menos al 85% de colaboradores comerciales y de riesgos en scoring y asesoria MYPE",
        "Alcanzar que el 75% de clientes MYPE digitales recomiende la financiera",
        "Lograr que el 80% de la cartera MYPE tenga mora controlada",
        "Reducir la evaluacion crediticia digital a 24 horas o menos"
      ],
      initiatives: [
        "Crear una escuela interna de asesores financieros MYPE.",
        "Desarrollar rutas de certificacion en scoring y gestion de riesgos.",
        "Capacitar en ventas consultivas y atencion digital.",
        "Centralizar todas las decisiones en la gerencia general.",
        "Comprar publicidad institucional para aumentar recordacion.",
        "Eliminar inducciones para acelerar contrataciones."
      ]
    }
  }
];

const state = {
  selections: {},
  validated: {},
  values: {},
  report: []
};

const byId = (id) => document.getElementById(id);

function init() {
  perspectives.forEach((p) => {
    state.selections[p.id] = { objective: "", indicator: "", target: "", initiatives: [] };
    state.validated[p.id] = false;
  });

  renderPerspectiveCards();
  bindEvents();
}

function bindEvents() {
  byId("startBtn").addEventListener("click", () => {
    byId("intro").classList.add("hidden");
    byId("builder").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  byId("toResultsBtn").addEventListener("click", () => {
    renderResultsForm();
    showOnly(["builder", "resultsEntry"]);
    byId("builder").classList.add("hidden");
    byId("resultsEntry").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  byId("backToBuilderBtn").addEventListener("click", goToBuilder);
  byId("editFromReportBtn").addEventListener("click", goToBuilder);
  byId("generateReportBtn").addEventListener("click", generateReport);
  byId("viewMapBtn").addEventListener("click", () => byId("mapSection").scrollIntoView({ behavior: "smooth" }));
  byId("printBtn").addEventListener("click", () => window.print());
  byId("resetBtn").addEventListener("click", resetSimulator);
}

function renderPerspectiveCards() {
  const container = byId("perspectiveCards");
  container.innerHTML = perspectives.map((p) => `
    <article class="perspective-card" style="--accent:${p.color}" data-perspective="${p.id}">
      <h3>${p.name}</h3>
      <div class="form-grid">
        ${renderSelect(p, "objective", "Objetivo", p.alternatives.objectives)}
        ${renderSelect(p, "indicator", "Indicador", p.alternatives.indicators)}
        ${renderSelect(p, "target", "Meta", p.alternatives.targets)}
      </div>
      <div class="field">
        <label>Iniciativas estrategicas <span class="field-help">(selecciona exactamente 3)</span></label>
        <div class="initiatives">
          ${p.alternatives.initiatives.map((item, index) => `
            <label class="check-option">
              <input type="checkbox" name="${p.id}-initiatives" value="${escapeAttr(item)}" data-index="${index}">
              <span>${item}</span>
            </label>
          `).join("")}
        </div>
      </div>
      <div class="card-actions">
        <button class="primary-btn validate-btn" type="button" data-id="${p.id}">Validar perspectiva</button>
        <button class="secondary-btn suggestion-btn hidden" type="button" data-id="${p.id}">Ver respuesta sugerida</button>
      </div>
      <div id="${p.id}-feedback" class="feedback"></div>
      <div id="${p.id}-suggestion" class="suggestion"></div>
    </article>
  `).join("");

  container.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", handleSelectChange);
  });

  container.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", handleInitiativeChange);
  });

  container.querySelectorAll(".validate-btn").forEach((button) => {
    button.addEventListener("click", () => validatePerspective(button.dataset.id));
  });

  container.querySelectorAll(".suggestion-btn").forEach((button) => {
    button.addEventListener("click", () => toggleSuggestion(button.dataset.id));
  });
}

function renderSelect(p, key, label, options) {
  return `
    <div class="field">
      <label for="${p.id}-${key}">${label}</label>
      <select id="${p.id}-${key}" data-id="${p.id}" data-key="${key}">
        <option value="">Selecciona una alternativa</option>
        ${options.map((item) => `<option value="${escapeAttr(item)}">${item}</option>`).join("")}
      </select>
    </div>
  `;
}

function handleSelectChange(event) {
  const { id, key } = event.target.dataset;
  state.selections[id][key] = event.target.value;
  state.validated[id] = false;
  updateContinueButton();
}

function handleInitiativeChange(event) {
  const id = event.target.name.split("-initiatives")[0];
  const checked = [...document.querySelectorAll(`input[name="${id}-initiatives"]:checked`)].map((box) => box.value);
  state.selections[id].initiatives = checked;
  state.validated[id] = false;
  updateContinueButton();
}

function validatePerspective(id) {
  const p = perspectives.find((item) => item.id === id);
  const selection = state.selections[id];
  const feedback = byId(`${id}-feedback`);
  const suggestionBtn = document.querySelector(`.suggestion-btn[data-id="${id}"]`);
  const missing = [];

  if (!selection.objective) missing.push("objetivo");
  if (!selection.indicator) missing.push("indicador");
  if (!selection.target) missing.push("meta");
  if (selection.initiatives.length !== 3) missing.push("exactamente tres iniciativas");

  if (missing.length) {
    state.validated[id] = false;
    setFeedback(feedback, "bad", `Antes de validar, revisa: ${missing.join(", ")}.`);
    suggestionBtn.classList.add("hidden");
    updateContinueButton();
    return;
  }

  const errors = [];
  if (selection.objective !== p.correct.objective) errors.push("objetivo");
  if (selection.indicator !== p.correct.indicator) errors.push("indicador");
  if (selection.target !== p.correct.target) errors.push("meta");
  if (!sameSet(selection.initiatives, p.correct.initiatives)) errors.push("iniciativas");

  if (!errors.length) {
    state.validated[id] = true;
    setFeedback(feedback, "good", `Correcto. La perspectiva ${p.name} mantiene coherencia entre objetivo, indicador, meta e iniciativas.`);
  } else {
    state.validated[id] = false;
    setFeedback(feedback, "warn", `Hay elementos por revisar: ${errors.join(", ")}. Verifica que el sujeto del objetivo coincida con el indicador y que las iniciativas contribuyan al caso.`);
  }

  suggestionBtn.classList.remove("hidden");
  renderSuggestion(p);
  updateContinueButton();
}

function setFeedback(element, tone, message) {
  element.className = `feedback show ${tone}`;
  element.textContent = message;
}

function renderSuggestion(p) {
  byId(`${p.id}-suggestion`).innerHTML = `
    <strong>Respuesta sugerida para ${p.name}</strong>
    <p><strong>Objetivo:</strong> ${p.correct.objective}</p>
    <p><strong>Indicador:</strong> ${p.correct.indicator}</p>
    <p><strong>Meta:</strong> ${p.correct.target}</p>
    <p><strong>Iniciativas:</strong> ${p.correct.initiatives.join(" ")}</p>
  `;
}

function toggleSuggestion(id) {
  byId(`${id}-suggestion`).classList.toggle("show");
}

function updateContinueButton() {
  byId("toResultsBtn").disabled = !perspectives.every((p) => state.validated[p.id]);
}

function renderResultsForm() {
  byId("resultsForm").innerHTML = perspectives.map((p) => `
    <article class="result-card" style="--accent:${p.color}">
      <h3>${p.name}</h3>
      <p><strong>Indicador:</strong> ${state.selections[p.id].indicator || p.correct.indicator}</p>
      <p><strong>Meta:</strong> ${p.correct.target}</p>
      <div class="field">
        <label for="${p.id}-value">Valor actual en ${p.unit}</label>
        <input id="${p.id}-value" type="number" min="0" step="0.01" value="${state.values[p.id] ?? ""}" placeholder="Ingresa un valor numerico">
      </div>
    </article>
  `).join("");
}

function generateReport() {
  const invalid = [];
  perspectives.forEach((p) => {
    const input = byId(`${p.id}-value`);
    const value = Number(input.value);
    if (!input.value || Number.isNaN(value) || value < 0 || (p.metricType === "lower" && value === 0)) {
      invalid.push(p.name);
      input.focus();
    } else {
      state.values[p.id] = value;
    }
  });

  if (invalid.length) {
    alert(`No se puede generar el reporte. Ingresa valores numericos validos en: ${invalid.join(", ")}.`);
    return;
  }

  state.report = perspectives.map((p) => {
    const value = state.values[p.id];
    const rawProgress = p.metricType === "higher" ? (value / p.metaNumber) * 100 : (p.metaNumber / value) * 100;
    const progress = Math.min(100, Math.max(0, rawProgress));
    const status = getStatus(progress);
    return {
      ...p,
      value,
      progress,
      status
    };
  });

  renderReport();
  renderMap();
  byId("reportSection").classList.remove("hidden");
  byId("mapSection").classList.remove("hidden");
  byId("reportSection").scrollIntoView({ behavior: "smooth" });
}

function renderReport() {
  const average = averageProgress();
  const sorted = [...state.report].sort((a, b) => b.progress - a.progress);
  const best = sorted[0];
  const weakest = sorted[sorted.length - 1];

  byId("summaryPanel").innerHTML = `
    <div class="summary-item"><span>Promedio BSC</span><strong>${formatPercent(average)}</strong></div>
    <div class="summary-item"><span>Mayor avance</span><strong>${best.name}</strong><p>${formatPercent(best.progress)}</p></div>
    <div class="summary-item"><span>Menor avance</span><strong>${weakest.name}</strong><p>${formatPercent(weakest.progress)}</p></div>
    <div class="summary-item"><span>Recomendacion</span><p>${recommendation(weakest.id)}</p></div>
  `;

  byId("reportBody").innerHTML = state.report.map((item) => {
    const selection = state.selections[item.id];
    return `
      <tr>
        <td>${item.name}</td>
        <td>${selection.objective}</td>
        <td>${selection.indicator}</td>
        <td>${selection.target}</td>
        <td>${formatValue(item)}</td>
        <td>
          ${formatPercent(item.progress)}
          <div class="progress" style="--value:${item.progress}%;--state:${item.status.color}"><span></span></div>
        </td>
        <td><span class="status-pill" style="--state:${item.status.color}">${item.status.label}</span></td>
      </tr>
    `;
  }).join("");
}

function renderMap() {
  const order = ["financiera", "cliente", "procesos", "aprendizaje"];
  byId("strategyMap").innerHTML = order.map((id) => {
    const item = state.report.find((entry) => entry.id === id);
    const selection = state.selections[id];
    return `
      <article class="map-level" style="--accent:${item.color}">
        <h3>${item.name}</h3>
        <div class="map-meta">
          <div><strong>Objetivo:</strong> ${selection.objective}</div>
          <div><strong>Indicador:</strong> ${selection.indicator}</div>
          <div><strong>Meta:</strong> ${selection.target}</div>
          <div><strong>Valor:</strong> ${formatValue(item)}</div>
          <div><strong>Avance:</strong> ${formatPercent(item.progress)}</div>
          <div><strong>Estado:</strong> <span class="status-pill" style="--state:${item.status.color}">${item.status.label}</span></div>
        </div>
        <div class="progress" style="--value:${item.progress}%;--state:${item.status.color}"><span></span></div>
      </article>
    `;
  }).join("");
}

function getStatus(progress) {
  if (progress >= 90) return { label: "En meta", color: "#157347" };
  if (progress >= 70) return { label: "En observacion", color: "#b7791f" };
  return { label: "Critico", color: "#b42318" };
}

function recommendation(id) {
  const messages = {
    financiera: "Revisar rentabilidad por segmento, pricing crediticio y control de mora.",
    cliente: "Fortalecer experiencia digital, seguimiento posdesembolso y fidelizacion.",
    procesos: "Priorizar automatizacion, scoring y reduccion de tiempos de evaluacion.",
    aprendizaje: "Acelerar certificacion de colaboradores y formacion en analitica de riesgos."
  };
  return messages[id];
}

function averageProgress() {
  return state.report.reduce((sum, item) => sum + item.progress, 0) / state.report.length;
}

function formatPercent(value) {
  return `${value.toFixed(1)}%`;
}

function formatValue(item) {
  return item.unit === "%" ? `${item.value.toFixed(2)}%` : `${item.value.toFixed(2)} horas`;
}

function sameSet(a, b) {
  return a.length === b.length && a.every((item) => b.includes(item));
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function showOnly(ids) {
  ["intro", "builder", "resultsEntry", "reportSection", "mapSection"].forEach((id) => {
    byId(id).classList.toggle("hidden", !ids.includes(id));
  });
}

function goToBuilder() {
  showOnly(["builder"]);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetSimulator() {
  if (!confirm("Deseas reiniciar el simulador y borrar las respuestas ingresadas?")) return;
  Object.keys(state.selections).forEach((id) => {
    state.selections[id] = { objective: "", indicator: "", target: "", initiatives: [] };
    state.validated[id] = false;
  });
  state.values = {};
  state.report = [];
  renderPerspectiveCards();
  updateContinueButton();
  showOnly(["intro"]);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

init();
