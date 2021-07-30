using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Api_9.Models
{
    public partial class Paciente
    {
        public int Id { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public string FechaNac { get; set; }
        public string TipoSangre { get; set; }
        public string Direccion { get; set; }
        public string Latitud { get; set; }
        public string Longitud { get; set; }
        public bool Positivo { get; set; }
        public string Justificacion { get; set; }
        public string Provincia { get; set; }
    }
}
