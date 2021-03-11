using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;

namespace API.Data
{
  public class UserRepository : IUserRepository
  {
    public Task<AppUser> GetUserByIdAsync(int id)
    {
      throw new System.NotImplementedException();
    }

    public Task<AppUser> GetUserByUsernameAsync(string username)
    {
      throw new System.NotImplementedException();
    }

    public Task<IEnumerable<AppUser>> GetUsersAsync()
    {
      throw new System.NotImplementedException();
    }

    public Task<bool> SaveAllAsync()
    {
      throw new System.NotImplementedException();
    }

    public void Update(AppUser user)
    {
      throw new System.NotImplementedException();
    }
  }
}