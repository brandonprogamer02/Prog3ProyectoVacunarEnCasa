using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MimeKit;
using Web_Api_9.Models;
using Web_Api_9.Models.Response;
using Web_Api_9.Services;


namespace Web_Api_9.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private readonly tarea9Context _context;
        private readonly IEmailSenderService emailSender;

        public PacientesController(tarea9Context context,IEmailSenderService email)
        {
            _context = context;
            this.emailSender = email;
        }

        // GET: api/Pacientes
        [HttpGet]
        public async Task<IActionResult> GetPacientes()
        {
            Response respuesta = new Response();
            IEnumerable<Paciente> lista = null;

            try
            {


                lista = await _context.Pacientes.ToListAsync();

                respuesta.ls = lista;
            }
            catch (Exception ex)
            {

                respuesta.mensaje = ex.Message;
            }


            return Ok(respuesta);
        }

        // GET: api/Pacientes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPaciente(int id)
        {

            Response respuesta = new Response();
            Paciente lista = null;

            try
            {


                lista = await _context.Pacientes.FindAsync(id);
                respuesta.ls = lista;
            }
            catch (Exception ex)
            {

                respuesta.mensaje = ex.Message;
            }


            return Ok(respuesta);
        }

        // PUT: api/Pacientes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaciente(int id, Paciente paciente)
        {
            if (id != paciente.Id)
            {
                return BadRequest();
            }

            _context.Entry(paciente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PacienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // POST: api/Pacientes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Paciente>> PostPaciente(Paciente paciente)
        {
            Response respuesta = new Response();
            MailRequest request = new MailRequest();

            request.Subject = "ApiServices";
            request.Body = @$"Gracias por tu interés en ApiServices Por este medio recibe un cordial saludo. 

                            Usted se ha registrado con el nombre de: {paciente.Nombre + paciente.Apellido}, he notado su interés con nuestras Vacunas desde casa por lo que me gustaría tener la 
                            oportunidad de platicar con usted. Si es de su preferencia podemos programar una breve conversación vía teléfono para ver cómo podemos ayudarte en este proceso de evaluación. 
                            Por favor hazme saber tu disponibilidad para poder agendar la llamada.";

            try
            {
                _context.Pacientes.Add(paciente);
                await _context.SaveChangesAsync();

                await emailSender.SendEmailAsync(request, paciente);

            }
            catch (Exception ex)
            {

                respuesta.mensaje = ex.Message;

                return Ok(respuesta);

            }


            return CreatedAtAction("GetPaciente", new { id = paciente.Id }, paciente);
        }

        // DELETE: api/Pacientes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaciente(int id)
        {
            var paciente = await _context.Pacientes.FindAsync(id);
            if (paciente == null)
            {
                return NotFound();
            }

            _context.Pacientes.Remove(paciente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PacienteExists(int id)
        {
            return _context.Pacientes.Any(e => e.Id == id);
        }

        
    }
}
