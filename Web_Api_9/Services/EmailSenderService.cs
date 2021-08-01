using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web_Api_9.Models;

namespace Web_Api_9.Services
{
    public class EmailSenderService : IEmailSenderService
    {

        private readonly SmtpSettings smtpSettings;

        public EmailSenderService(IOptions<SmtpSettings>  smtp)
        {
            smtpSettings = smtp.Value;
        }
        public async Task SendEmailAsync(MailRequest request, Paciente paciente)
        {
            try
            {
                var message = new MimeMessage();

                message.From.Add(new MailboxAddress(smtpSettings.SenderName, smtpSettings.SenderEmail));
                message.To.Add(new MailboxAddress("", paciente.Email));
                message.Subject = request.Subject;
                message.Body = new TextPart("html") { Text = request.Body };

                using (var client = new SmtpClient())
                {
                    await client.ConnectAsync(smtpSettings.Server);
                    await client.AuthenticateAsync(smtpSettings.UserName, smtpSettings.Password);
                    await client.SendAsync(message);
                    await client.DisconnectAsync(true);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
