using System.Threading.Tasks;

namespace Karo.Messaging
{
    public interface IBus
    {
        Task StartAsync();
    }
}