import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import './styles/app.css'; // Estilo CSS personalizado

const localizer = momentLocalizer(moment);

const salasDisponiveis = ['Todas as salas', 'Sala 1', 'Sala 2', 'Sala 3'];

const MenuLateral = ({ salasSelecionadas, toggleSala }) => {
  return (
    <div className="menu-lateral">
      <h2>Salas Disponíveis</h2>
      {salasDisponiveis.map((sala, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`sala-${index}`}
            value={sala}
            checked={salasSelecionadas.includes(sala)}
            onChange={() => toggleSala(sala)}
          />
          <label htmlFor={`sala-${index}`}>{sala}</label>
        </div>
      ))}
    </div>
  );
};

function App() {
  const [eventos, setEventos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarEventoInfo, setMostrarEventoInfo] = useState(false);
  const [novaData, setNovaData] = useState('');
  const [novoEvento, setNovoEvento] = useState({
    title: '',
    start: '',
    end: '',
    sala: '', // Adicionando sala ao objeto de evento
  });
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [eventoSelecionado, setEventoSelecionado] = useState(null);
  const [salasSelecionadas, setSalasSelecionadas] = useState(['Todas as salas']);

  const toggleSala = (sala) => {
    if (sala === 'Todas as salas') {
      if (salasSelecionadas.includes('Todas as salas')) {
        setSalasSelecionadas([]);
      } else {
        setSalasSelecionadas(['Todas as salas']);
      }
    } else {
      if (salasSelecionadas.includes('Todas as salas')) {
        setSalasSelecionadas([sala]);
      } else {
        if (salasSelecionadas.includes(sala)) {
          setSalasSelecionadas(salasSelecionadas.filter((s) => s !== sala));
        } else {
          setSalasSelecionadas([...salasSelecionadas, sala]);
        }
      }
    }
  };

  const handleSelectSlot = (slotInfo) => {
    setNovaData(slotInfo.start);
    setMostrarFormulario(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'horaInicio') {
      setHoraInicio(value);
    } else if (name === 'horaFim') {
      setHoraFim(value);
    } else {
      setNovoEvento({
        ...novoEvento,
        [name]: value,
      });
    }
  };

  const handleDataSubmit = (e) => {
    e.preventDefault();
    const horaInicioMoment = moment(horaInicio, 'HH:mm', true);
    const horaFimMoment = moment(horaFim, 'HH:mm', true);
    if (horaInicioMoment.isValid() && horaFimMoment.isValid()) {
      const novoEventoCompleto = {
        ...novoEvento,
        start: moment(novaData)
          .hour(horaInicioMoment.hour())
          .minute(horaInicioMoment.minute())
          .toDate(),
        end: moment(novaData)
          .hour(horaFimMoment.hour())
          .minute(horaFimMoment.minute())
          .toDate(),
      };
      setEventos([...eventos, novoEventoCompleto]);
      setNovoEvento({
        title: '',
        start: '',
        end: '',
        sala: '',
      });
      setHoraInicio('');
      setHoraFim('');
      setMostrarFormulario(false);
    } else {
      alert('Por favor, insira uma hora válida no formato HH:mm');
    }
  };

  const handleCancelar = () => {
    setMostrarFormulario(false);
    setNovoEvento({
      title: '',
      start: '',
      end: '',
      sala: '',
    });
    setHoraInicio('');
    setHoraFim('');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMostrarFormulario(false);
      setNovoEvento({
        title: '',
        start: '',
        end: '',
        sala: '',
      });
      setHoraInicio('');
      setHoraFim('');
    }
  };

  const handleSelectEvent = (event) => {
    setEventoSelecionado(event);
    setMostrarEventoInfo(true);
  };

  const isSalaOcupada = (sala, start, end) => {
    return eventos.some((evento) => {
      const inicioEvento = moment(evento.start);
      const fimEvento = moment(evento.end);
      const inicioNovoEvento = moment(start);
      const fimNovoEvento = moment(end);
      return (
        evento.sala === sala &&
        (inicioNovoEvento.isBetween(inicioEvento, fimEvento) ||
          inicioNovoEvento.isSameOrBefore(inicioEvento)) &&
        (fimNovoEvento.isBetween(inicioEvento, fimEvento) ||
          fimNovoEvento.isSameOrAfter(fimEvento))
      );
    });
  };

  const getEventoInfo = () => {
    if (!eventoSelecionado) return null;
    return (
      <div className="evento-selecionado">
        <h2>{eventoSelecionado.title}</h2>
        <p>
          <strong>Sala:</strong> {eventoSelecionado.sala}
        </p>
        <p>
          <strong>Início:</strong>{' '}
          {moment(eventoSelecionado.start).format('DD/MM/YYYY HH:mm')}
        </p>
        <p>
          <strong>Término:</strong>{' '}
          {moment(eventoSelecionado.end).format('DD/MM/YYYY HH:mm')}
        </p>
        <button onClick={() => setMostrarEventoInfo(false)}>Fechar</button>
      </div>
    );
  };

  const eventosFiltrados = eventos.filter((evento) => {
    if (salasSelecionadas.includes('Todas as salas')) {
      return true;
    }
    return salasSelecionadas.includes(evento.sala);
  });

  return (
    <div className="App">
      <h1 className="titulo">Minha Agenda</h1>
      <div className="conteudo">
        <MenuLateral
          salasSelecionadas={salasSelecionadas}
          toggleSala={toggleSala}
        />
        <div className="calendario-container">
          <Calendar
            localizer={localizer}
            events={eventosFiltrados}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            style={{ height: 500 }}
          />
          {mostrarFormulario && (
            <div className="formulario-overlay" onClick={handleOverlayClick}>
              <div className="formulario-evento">
                <h2>Adicionar Evento</h2>
                <form onSubmit={handleDataSubmit}>
                  <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={novoEvento.title}
                    onChange={handleInputChange}
                  />
                  <input
                    type="time"
                    name="horaInicio"
                    placeholder="Horário de início"
                    value={horaInicio}
                    onChange={handleInputChange}
                  />
                  <input
                    type="time"
                    name="horaFim"
                    placeholder="Horário de término"
                    value={horaFim}
                    onChange={handleInputChange}
                  />
                  <select
                    name="sala"
                    value={novoEvento.sala}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione uma sala</option>
                    {salasDisponiveis
                      .filter((sala) => sala !== 'Todas as salas')
                      .map((sala, index) => (
                        <option
                          key={index}
                          value={sala}
                          disabled={isSalaOcupada(
                            sala,
                            novaData,
                            novaData
                          )}
                        >
                          {sala}
                        </option>
                      ))}
                  </select>
                  <div className="botoes">
                    <button type="submit">Adicionar Evento</button>
                    <button type="button" onClick={handleCancelar}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {mostrarEventoInfo && (
            <div
              className="evento-info-overlay"
              onClick={() => setMostrarEventoInfo(false)}
            >
              <div className="evento-info-container">
                {getEventoInfo()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
