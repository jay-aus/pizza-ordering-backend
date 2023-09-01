export function validateOrderInput(location: string, orders: any[]): boolean {
    if (!location || !['Preston', 'Southbank'].includes(location) || !Array.isArray(orders) || orders.length === 0) {
      return false;
    }
    return true;
  }
  