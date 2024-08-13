import "./Chatgpt.css";

export default function Chatgpt() {
  return (
    <div className="falsobody">
      <main>
        <ul>
          <li class="message bot">
            <span>GPT</span>
            <span>Esta es la respuesta del bot</span>
          </li>
          <li class="message user">
            <span>Tu</span>
            <span>Esta es la respuesta del usuario</span>
          </li>
        </ul>
      </main>

      <form>
        <input placeholder="Escribe tu mensaje..." />
        <button>Enviar</button>
      </form>

      <template id="message-template">
        <li class="message">
          <span></span>
          <span></span>
        </li>
      </template>
    </div>
  );
}

// Lo voy a re hacer todo