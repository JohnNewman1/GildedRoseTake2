describe('AgedBrieStrategy', function(){
  var AgedBrieStrategy = require('../src/AgedBrieStrategy');
  beforeEach(function(){
    agedStrategy = new AgedBrieStrategy();
    agedBrie = { name: "Aged Brie", sellIn: 2, quality: 5 }
    agedBrieAboveFifty = { name: "Aged Brie", sellIn: 2, quality: 50 }
  })
  it('Reduces sellIn by 1', function(){
    agedStrategy.updateItem(agedBrie)
    expect(agedBrie.sellIn).toEqual(1)
  })

  it('Increases quality by 1', function(){
    agedStrategy.updateItem(agedBrie)
    expect(agedBrie.quality).toEqual(6)
  })

  it('Increases quality by 2 well sellIn is zero or below', function(){
    agedStrategy.updateItem(agedBrie)
    agedStrategy.updateItem(agedBrie)
    agedStrategy.updateItem(agedBrie)
    expect(agedBrie.quality).toEqual(9)
  })

  it('Will not let quality go above 50', function(){
    agedStrategy.updateItem(agedBrieAtZero)
    expect(agedBrieAboveFifty.quality).toEqual(50)
  })
})
