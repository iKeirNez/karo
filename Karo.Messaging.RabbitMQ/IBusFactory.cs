using MassTransit;

namespace Karo.Messaging.RabbitMQ
{
    public interface IBusFactory
    {
        IBusControl Create();
    }
}