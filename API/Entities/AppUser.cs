using System;
using System.Collections.Generic;
using API.Extensions;

namespace API.Entities
{
  public class AppUser
  {
    public string City { get; set; }
    public string Country { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime DateOfBirth { get; set; } = DateTime.Now;
    public string Gender { get; set; }
    public int Id { get; set; }
    public string Interests { get; set; }
    public string Introduction { get; set; }
    public string KnownAs { get; set; }
    public DateTime LastActive { get; set; } = DateTime.Now;
    public string LookingFor { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public ICollection<Photo> Photos { get; set; }
    public string UserName { get; set; }

    public int GetAge()
    {
      return DateOfBirth.CalculateAge();
    }
  }
}