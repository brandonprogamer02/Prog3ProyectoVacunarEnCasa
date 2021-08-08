using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Web_Api_9.Models
{
    public partial class tarea9Context : DbContext
    {
        public tarea9Context()
        {
        }

        public tarea9Context(DbContextOptions<tarea9Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Paciente> Pacientes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("Server=apiweb9.mysql.database.azure.com; Port=3306; Database=tarea9; Uid=rooter@apiweb9; Pwd=internet@23; SslMode=Preferred;", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.18-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_general_ci");

            modelBuilder.Entity<Paciente>(entity =>
            {
                entity.ToTable("paciente");

                entity.UseCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.Apellido)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Cedula)
                    .IsRequired()
                    .HasMaxLength(11);

                entity.Property(e => e.Direccion)
                    .IsRequired()
                    .HasMaxLength(90);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FechaNac)
                    .IsRequired()
                    .HasMaxLength(8)
                    .HasColumnName("Fecha_Nac");

                entity.Property(e => e.Justificacion)
                    .IsRequired()
                    .HasMaxLength(120);

                entity.Property(e => e.Latitud)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Longitud)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Provincia)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Telefono)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.TipoSangre)
                    .IsRequired()
                    .HasMaxLength(2)
                    .HasColumnName("Tipo_Sangre");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
