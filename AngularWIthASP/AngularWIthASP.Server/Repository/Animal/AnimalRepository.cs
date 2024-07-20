using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.server.Repository.Context;
using AngularWIthASP.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWIthASP.Server.Repositories
{
    public class AnimalRepository : IAnimalRepository
    {
        private readonly ApplicationDbContext _context;

        public AnimalRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Animal>> GetAll()
        {
            return await _context.Animals.ToListAsync();
        }

        public async Task<Animal> GetById(Guid id)
        {
            return await _context.Animals.FindAsync(id);
        }

        public async Task<Animal> Create(Animal animal)
        {
            _context.Animals.Add(animal);
            await _context.SaveChangesAsync();
            return animal;
        }

        public async Task<Animal> Update(Animal animal)
        {
            _context.Animals.Update(animal);
            await _context.SaveChangesAsync();
            return animal;
        }

        public async Task Delete(Guid id)
        {
            var animal = await _context.Animals.FindAsync(id);
            if (animal != null)
            {
                _context.Animals.Remove(animal);
                await _context.SaveChangesAsync();
            }
        }
    }
}