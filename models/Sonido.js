var mongoose = require('mongoose');

var DaySchema = new mongoose.Schema({
  day: Date,
}, { collection: 'sonometro-days' });
  }
  this.save(callback);
}

mongoose.model('Day', DaySchema);
