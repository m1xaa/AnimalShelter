using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;

namespace AngularWIthASP.Server.Repositories
{
    public interface IAnimalRepository
    {
        Task<IEnumerable<Animal>> GetAll();
        Task<Animal> GetById(Guid id);
        Task<Animal> Create(Animal animal);
        Task<Animal> Update(Animal animal);
        Task Delete(Guid id);
    }
}