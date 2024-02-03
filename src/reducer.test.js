import {reducer, initialState, showList, showMap, showDetails, setDateRange, setFilter} from "./reducer";

it('set list to display', () => {
    let state1 = reducer(initialState, showList());
    expect(state1.display).toBe('list');
    expect(state1.items).toBe(initialState.items);
    expect(state1.filter).toBe(initialState.filter);
    expect(state1.activeItem).toBe(initialState.activeItem);
    expect(state1.startDate).toBe(initialState.startDate);
    expect(state1.endDate).toBe(initialState.endDate);
});
it('set map to display', () => {
    let state1 = reducer(initialState, showMap());
    expect(state1.display).toBe('map');
    expect(state1.items).toBe(initialState.items);
    expect(state1.filter).toBe(initialState.filter);
    expect(state1.activeItem).toBe(initialState.activeItem);
    expect(state1.startDate).toBe(initialState.startDate);
    expect(state1.endDate).toBe(initialState.endDate);
});
it('set details to display', () => {
    let state1 = reducer(initialState, showDetails(1));
    expect(state1.display).toBe('details');
    expect(state1.items).toBe(initialState.items);
    expect(state1.filter).toBe(initialState.filter);
    expect(state1.activeItem).toBe(initialState.items[0]);
    expect(state1.startDate).toBe(initialState.startDate);
    expect(state1.endDate).toBe(initialState.endDate);
});
it('set filter to display', () => {
    let state1 = reducer(initialState, setFilter('ciao'));
    expect(state1.display).toBe(initialState.display);
    expect(state1.items).toBe(initialState.items);
    expect(state1.filter).toBe('ciao');
    expect(state1.activeItem).toBe(initialState.activeItem);
    expect(state1.startDate).toBe(initialState.startDate);
    expect(state1.endDate).toBe(initialState.endDate);
});
it('set date', () => {
    let from = new Date(2019, 11, 20, 0, 0, 0);
    let to = new Date(2019, 11, 25,0,0,0);
    let state1 = reducer(initialState, setDateRange(from,to));
    expect(state1.display).toBe(initialState.display);
    expect(state1.items).toBe(initialState.items);
    expect(state1.filter).toBe(initialState.filter);
    expect(state1.activeItem).toBe(initialState.activeItem);
    expect(state1.startDate).toBe(from);
    expect(state1.endDate).toBe(to);
});
