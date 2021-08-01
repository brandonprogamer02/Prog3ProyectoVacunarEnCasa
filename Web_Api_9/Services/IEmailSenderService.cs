using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web_Api_9.Models;

namespace Web_Api_9.Services
{
    public interface IEmailSenderService
    {
        Task SendEmailAsync(MailRequest request, Paciente paciente);
    }
}
