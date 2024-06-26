// BuildYourOwnBowl.jsx
export function BuildYourOwnBurritoBowl({ form, updateForm }) {
    const handleCheckboxChange = (e) => {
      const { name, value, checked } = e.target;
      const newValues = checked
        ? [...(form[name] || []), value]
        : (form[name] || []).filter((v) => v !== value);
      updateForm({ [name]: newValues });
    };
  
    const toppingsOptions = [
      "Shredded Lettuce", "Shredded Cheese", "Guacamole", "Pico De Gallo", "None"
    ];
    
    return (
      <div className="space-y-4">
        <div className="space-y-4">
          <label htmlFor="Protein" className="block text-lg font-medium leading-6 text-slate-900 mb-2" style={{ fontSize: '20px' }}>
            Protein
          </label>
          <div className="space-y-4">
            <select
              id="Protein"
              name="Protein"
              className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
              value={form.protein || ""}
              onChange={(e) => updateForm({ protein: e.target.value })}
            >
              <option value="">Select a protein</option>
              <option value="Chicken">Chicken</option>
              <option value="Impossible">Impossible</option>
              <option value="Pork Al Pastor">Pork Al Pastor</option>
              <option value="Shrimp">Shrimp</option>
              <option value="Spiced Red Lentils">Spiced Red Lentils</option>
              <option value="Steak">Steak</option>
              <option value="Tofu Sofrito">Tofu Sofrito</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
        </div>
  
        <div className="space-y-4">
          <label htmlFor="Side 1" className="block text-lg font-medium leading-6 text-slate-900 mb-2" style={{ fontSize: '20px' }}>
            Sides (1/2)
          </label>
          <div className="space-y-4">
            <select
              id="Side 1"
              name="Side 1"
              className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
              value={form.side1 || ""}
              onChange={(e) => updateForm({ side1: e.target.value })}
            >
              <option value="">Select a side</option>
              <option value="Brown Calrose Rice">Brown Calrose Rice</option>
              <option value="Mexican Rice">Mexican Rice</option>
              <option value="Black Beans">Black Beans</option>
              <option value="Refried Beans">Refried Beans</option>
              <option value="Tortilla Chips">Tortilla Chips</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
  
        <div className="space-y-4">
          <label htmlFor="Side 2" className="block text-lg font-medium leading-6 text-slate-900 mb-2" style={{ fontSize: '20px' }}>
            Sides (2/2)
          </label>
          <div className="space-y-4">
            <select
              id="Side 2"
              name="Side 2"
              className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
              value={form.side2 || ""}
              onChange={(e) => updateForm({ side2: e.target.value })}
            >
              <option value="">Select a side</option>
              <option value="Brown Calrose Rice">Brown Calrose Rice</option>
              <option value="Mexican Rice">Mexican Rice</option>
              <option value="Black Beans">Black Beans</option>
              <option value="Refried Beans">Refried Beans</option>
              <option value="Tortilla Chips">Tortilla Chips</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
  
        <div className="space-y-4">
          <label className="block text-lg font-medium leading-6 text-slate-900 mb-2" style={{ fontSize: '20px' }}>
            Toppings 
          </label>
          {toppingsOptions.map((option) => (
            <div key={option} className="mt-1">
              <input
                type="checkbox"
                name="toppings1"
                value={option}
                checked={(form.toppings1 || []).includes(option)}
                onChange={handleCheckboxChange}
                className="mr-2 rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
              />
              <label className="text-lg leading-6 text-slate-900">{option}</label>
            </div>
          ))}
        </div>
  
        <div className="space-y-4">
          <label htmlFor="beverage" className="block text-lg font-medium leading-6 text-slate-900 mb-2" style={{ fontSize: '20px' }}>
            Beverage
          </label>
          <div className="space-y-4">
            <select
              id="beverage"
              name="beverage"
              className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
              value={form.beverage || ""}
              onChange={(e) => updateForm({ beverage: e.target.value })}
            >
              <option value="">Select a beverage</option>
              <option value="Fountain Beverage">Fountain Beverage</option>
              <option value="Apple Juice">Apple Juice</option>
              <option value="Fat-Free Milk">Fat-Free Milk</option>
              <option value="Low-Fat Milk">Low-Fat Milk</option>
              <option value="Orange Juice">Orange Juice</option>
              <option value="Vanilla Soy Milk">Vanilla Soy Milk</option>
              <option value="Hot Green Tea">Hot Green Tea</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
      </div>
    );
    }

export function BuildYourOwnRendeWestSalad({ form, updateForm }) {
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const newValues = checked
          ? [...(form[name] || []), value]
          : (form[name] || []).filter((v) => v !== value);
        updateForm({ [name]: newValues });
      };
      const toppingsOptions = [
        "Shredded Lettuce", "Shredded Cheese", "Guacamole", "Pico De Gallo", "None"
      ];
    return (
        <div className="space-y-4">
        <label htmlFor="Protein" className="block text-sm font-medium leading-6 text-slate-900">
          Protein
        </label>
        <div className="space-y-4">
        <select
          id="Protein"
          name="Protein"
          className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={form.protein || ""}
          onChange={(e) => updateForm({ protein: e.target.value })}
        >
            <option value="">Select a protein</option>
            <option value="Chicken">Chicken</option>
            <option value="Impossible">Impossible</option>
            <option value="Pork Al Pastor">Pork Al Pastor</option>
            <option value="Shrimp">Shrimp</option>
            <option value="Spiced Red Lentils">Spiced Red Lentils</option>
            <option value="Steak">Steak</option>
            <option value="Tofu Sofrito">Tofu Sofrito</option>
            <option value="Vegan">Vegan</option>
        </select>
        </div>
        <label htmlFor="Side 1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 1"
            name="Side 1"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side1 || ""}
            onChange={(e) => updateForm({ side1: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="Side 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 2"
            name="Side 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side2 || ""}
            onChange={(e) => updateForm({ side2: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>
        </select>
        </div>
        <label className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Toppings 
      </label>
      {toppingsOptions.map((option) => (
        <div key={option} className="mt-1">
          <input
            type="checkbox"
            name="toppings1"
            value={option}
            checked={(form.toppings1 || []).includes(option)}
            onChange={handleCheckboxChange}
            className="mr-2 rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label className="text-sm leading-6 text-slate-900">{option}</label>
        </div>
      ))}

        <label htmlFor="toppings 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 2"
            name="toppings 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings2 || ""}
            onChange={(e) => updateForm({ toppings2: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="toppings 3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 3"
            name="toppings 3"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings3 || ""}
            onChange={(e) => updateForm({ toppings3: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>
        </select>
        </div>
        <label htmlFor="beverage" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Beverage
        </label>
        <div className="space-y-4">
        <select
            id="beverage"
            name="beverage"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.beverage || ""}
            onChange={(e) => updateForm({ beverage: e.target.value })}
        >
            <option value="">Select a beverage</option>
            <option value="Fountain Beverage">Fountain Beverage</option>
            <option value="Apple Juice">Apple Juice</option>
            <option value="Fat-Free Milk">Fat-Free Milk</option>
            <option value="Low-Fat Milk">Low-Fat Milk</option>
            <option value="Orange Juice">Orange Juice</option>
            <option value="Vanilla Soy Milk">Vanilla Soy Milk</option>
            <option value="Hot Green Tea">Hot Green Tea</option>
            <option value="None">None</option>

        </select>
        </div>
      </div>
    );
    }

export function BuildYourOwnBurrito({ form, updateForm }) {
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const newValues = checked
          ? [...(form[name] || []), value]
          : (form[name] || []).filter((v) => v !== value);
        updateForm({ [name]: newValues });
      };
    
      const toppingsOptions = [
        "Shredded Lettuce", "Shredded Cheese", "Guacamole", "Pico De Gallo", "None"
      ];
    return (
        <div className="space-y-4">
        
        <label htmlFor="Protein" className="block text-sm font-medium leading-6 text-slate-900">
          Protein
        </label>
        <div className="space-y-4">
        <select
          id="Protein"
          name="Protein"
          className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={form.protein || ""}
          onChange={(e) => updateForm({ protein: e.target.value })}
        >
            <option value="">Select a protein</option>
            <option value="Bean & Cheese">Bean & Cheese</option>
            <option value="Chicken">Chicken</option>
            <option value="Impossible">Impossible</option>
            <option value="Pork Al Pastor">Pork Al Pastor</option>
            <option value="Shrimp">Shrimp</option>
            <option value="Spiced Red Lentils">Spiced Red Lentils</option>
            <option value="Steak">Steak</option>
            <option value="Tofu Sofrito">Tofu Sofrito</option>
            <option value="Vegetarian">Vegetarian</option>
        </select>
        </div>
        <label htmlFor="Side 1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 1"
            name="Side 1"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side1 || ""}
            onChange={(e) => updateForm({ side1: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="Side 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 2"
            name="Side 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side2 || ""}
            onChange={(e) => updateForm({ side2: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>
        </select>
        </div>
        <label className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Toppings 
      </label>
      {toppingsOptions.map((option) => (
        <div key={option} className="mt-1">
          <input
            type="checkbox"
            name="toppings1"
            value={option}
            checked={(form.toppings1 || []).includes(option)}
            onChange={handleCheckboxChange}
            className="mr-2 rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label className="text-sm leading-6 text-slate-900">{option}</label>
        </div>
      ))}

        <label htmlFor="toppings 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 2"
            name="toppings 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings2 || ""}
            onChange={(e) => updateForm({ toppings2: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="toppings 3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 3"
            name="toppings 3"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings3 || ""}
            onChange={(e) => updateForm({ toppings3: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="beverage" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Beverage
        </label>
        <div className="space-y-4">
        <select
            id="beverage"
            name="beverage"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.beverage || ""}
            onChange={(e) => updateForm({ beverage: e.target.value })}
        >
            <option value="">Select a beverage</option>
            <option value="Fountain Beverage">Fountain Beverage</option>
            <option value="Apple Juice">Apple Juice</option>
            <option value="Fat-Free Milk">Fat-Free Milk</option>
            <option value="Low-Fat Milk">Low-Fat Milk</option>
            <option value="Orange Juice">Orange Juice</option>
            <option value="Vanilla Soy Milk">Vanilla Soy Milk</option>
            <option value="Hot Green Tea">Hot Green Tea</option>
            <option value="None">None</option>

        </select>
        </div>

      </div>
    );
    }

export function BuildYourOwnTacos({ form, updateForm }) {
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const newValues = checked
          ? [...(form[name] || []), value]
          : (form[name] || []).filter((v) => v !== value);
        updateForm({ [name]: newValues });
      };
    
      const toppingsOptions = [
        "Shredded Lettuce", "Shredded Cheese", "Guacamole", "Pico De Gallo", "None"
      ];
    return (
        <div className="space-y-4">
        
        <label htmlFor="Protein" className="block text-sm font-medium leading-6 text-slate-900">
          Protein
        </label>
        <div className="space-y-4">
        <select
          id="Protein"
          name="Protein"
          className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={form.protein || ""}
          onChange={(e) => updateForm({ protein: e.target.value })}
        >
            <option value="">Select a protein</option>
            <option value="Chicken">Chicken</option>
            <option value="Impossible">Impossible</option>
            <option value="Pork Al Pastor">Pork Al Pastor</option>
            <option value="Shrimp">Shrimp</option>
            <option value="Spiced Red Lentils">Spiced Red Lentils</option>
            <option value="Steak">Steak</option>
            <option value="Tofu Sofrito">Tofu Sofrito</option>
        </select>
        </div>
        <label htmlFor="Side 1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 1"
            name="Side 1"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side1 || ""}
            onChange={(e) => updateForm({ side1: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="Side 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 2"
            name="Side 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side2 || ""}
            onChange={(e) => updateForm({ side2: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>
        </select>
        </div>
        <label className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Toppings 
      </label>
      {toppingsOptions.map((option) => (
        <div key={option} className="mt-1">
          <input
            type="checkbox"
            name="toppings1"
            value={option}
            checked={(form.toppings1 || []).includes(option)}
            onChange={handleCheckboxChange}
            className="mr-2 rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label className="text-sm leading-6 text-slate-900">{option}</label>
        </div>
      ))}

        <label htmlFor="toppings 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 2"
            name="toppings 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings2 || ""}
            onChange={(e) => updateForm({ toppings2: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="toppings 3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 3"
            name="toppings 3"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings3 || ""}
            onChange={(e) => updateForm({ toppings3: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="beverage" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Beverage
        </label>
        <div className="space-y-4">
        <select
            id="beverage"
            name="beverage"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.beverage || ""}
            onChange={(e) => updateForm({ beverage: e.target.value })}
        >
            <option value="">Select a beverage</option>
            <option value="Fountain Beverage">Fountain Beverage</option>
            <option value="Apple Juice">Apple Juice</option>
            <option value="Fat-Free Milk">Fat-Free Milk</option>
            <option value="Low-Fat Milk">Low-Fat Milk</option>
            <option value="Orange Juice">Orange Juice</option>
            <option value="Vanilla Soy Milk">Vanilla Soy Milk</option>
            <option value="Hot Green Tea">Hot Green Tea</option>
            <option value="None">None</option>

        </select>
      </div>

      </div>
    );
    }

export function BuildYourOwnTacoSalad({ form, updateForm }) {
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const newValues = checked
          ? [...(form[name] || []), value]
          : (form[name] || []).filter((v) => v !== value);
        updateForm({ [name]: newValues });
      };
    
      const toppingsOptions = [
        "Shredded Lettuce", "Shredded Cheese", "Guacamole", "Pico De Gallo", "None"
      ];
    return (
        <div className="space-y-4">
        
        <label htmlFor="Protein" className="block text-sm font-medium leading-6 text-slate-900">
          Protein
        </label>
        <div className="space-y-4">
        <select
          id="Protein"
          name="Protein"
          className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={form.protein || ""}
          onChange={(e) => updateForm({ protein: e.target.value })}
        >
            <option value="Chicken">Chicken</option>
            <option value="Impossible">Impossible</option>
            <option value="Plant based">Plant based</option>
            <option value="Pork Al Pastor">Pork Al Pastor</option>
            <option value="Shrimp">Shrimp</option>
            <option value="Spiced red Lentils">Spiced red Lentils</option>
            <option value="Steak">Steak</option>
            <option value="Tofu Sofrito">Tofu Sofrito</option>
        </select>
        </div>
        <label htmlFor="Side 1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 1"
            name="Side 1"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side1 || ""}
            onChange={(e) => updateForm({ side1: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="Side 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Sides (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="Side 2"
            name="Side 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.side2 || ""}
            onChange={(e) => updateForm({ side2: e.target.value })}
        >
            <option value="">Select a side</option>
            <option value="Brown Calrose Rice">Brown Calrose Rice</option>
            <option value="Mexican Rice">Mexican Rice</option>
            <option value="Black Beans">Black Beans</option>
            <option value="Refried Beans">Refried Beans</option>
            <option value="Tortilla Chips">Tortilla Chips</option>
            <option value="None">None</option>
        </select>
        </div>
        <label className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Toppings 
      </label>
      {toppingsOptions.map((option) => (
        <div key={option} className="mt-1">
          <input
            type="checkbox"
            name="toppings1"
            value={option}
            checked={(form.toppings1 || []).includes(option)}
            onChange={handleCheckboxChange}
            className="mr-2 rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label className="text-sm leading-6 text-slate-900">{option}</label>
        </div>
      ))}

        <label htmlFor="toppings 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (1/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 2"
            name="toppings 2"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings2 || ""}
            onChange={(e) => updateForm({ toppings2: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="toppings 3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Toppings (2/2)
        </label>
        <div className="space-y-4">
        <select
            id="toppings 3"
            name="toppings 3"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.toppings3 || ""}
            onChange={(e) => updateForm({ toppings3: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Corn">Corn</option>
            <option value="Sour Cream">Sour Cream</option>
            <option value="Chipotle Sour Cream">Chipotle Sour Cream</option>
            <option value="Cilantro Sour Cream">Cilantro Sour Cream</option>
            <option value="None">None</option>

        </select>
        </div>
        <label htmlFor="beverage" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
            Beverage
        </label>
        <div className="space-y-4">
        <select
            id="beverage"
            name="beverage"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.beverage || ""}
            onChange={(e) => updateForm({ beverage: e.target.value })}
        >
            <option value="">Select a beverage</option>
            <option value="Fountain Beverage">Fountain Beverage</option>
            <option value="Apple Juice">Apple Juice</option>
            <option value="Fat-Free Milk">Fat-Free Milk</option>
            <option value="Low-Fat Milk">Low-Fat Milk</option>
            <option value="Orange Juice">Orange Juice</option>
            <option value="Vanilla Soy Milk">Vanilla Soy Milk</option>
            <option value="Hot Green Tea">Hot Green Tea</option>
            <option value="None">None</option>

        </select>
        </div>

      </div>
    );
    }

export function BuildYourOwnPizza({ form, updateForm }) {
    return (
        <div className="space-y-4">
        
        <label htmlFor="Sauce" className="block text-sm font-medium leading-6 text-slate-900" style={{ fontSize: '20px' }}>
        Sauce
      </label>
      <div className="space-y-4">
      <select
        id="Sauce"
        name="Sauce"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.sauce || ""}
        onChange={(e) => updateForm({ sauce: e.target.value })}
        
      >
        <option value="">Select a sauce</option>
        <option value="BBQ Sauce">BBQ Sauce</option>
        <option value="Bechamel Sauce">Bechamel Sauce</option>
        <option value="Buffalo Sauce">Buffalo Sauce</option>
        <option value="Dill & Shallot Cream Cheese">Dill & Shallot Cream Cheese</option>
        <option value="Pesto Sauce">Pesto Sauce</option>
        <option value="Smoked Tomato Sauce">Smoked Tomato Sauce</option>
        <option value="Spicy Marinara Sauce">Spicy Marinara Sauce</option>
        <option value="No Sauce">No Sauce</option>
      </select>
      </div>
      <label htmlFor="Cheese" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Cheese
      </label>
      <div className="space-y-4">
      <select
        id="Cheese"
        name="Cheese"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.cheese || ""}
        onChange={(e) => updateForm({ cheese: e.target.value })}
      >
        <option value="">Select a cheese</option>
        <option value="Fontina, Parmesan, Asiago, & Provolone Cheese Blend">Fontina, Parmesan, Asiago, & Provolone Cheese Blend</option>
        <option value="Mozzarella Cheese">Mozzarella Cheese</option>
        <option value="Vegan Mozzarella Cheese">Vegan Mozzarella Cheese</option>
        <option value="No Cheese">No Cheese</option>
      </select>
      </div>
      <label htmlFor="Topping" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Topping
      </label>
      <div className="space-y-4">
      <select
        id="Topping"
        name="Topping"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.topping || ""}
        onChange={(e) => updateForm({ topping: e.target.value })}
      >
        <option value="">Select a topping</option>
        <option value="Bacon">Bacon</option>
        <option value="Black Forest Ham">Black Forest Ham</option>
        <option value="Grilled Rosemary Chicken Breast">Grilled Rosemary Chicken Breast</option>
        <option value="Italian Sausage">Italian Sausage</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Smoked Pacific Steelhead Salmon Trout">Smoked Pacific Steelhead Salmon Trout</option>
        <option value="Vegan Sausage">Vegan Sausage</option>
        <option value="None">None</option>
      </select>
      </div>
      <label htmlFor="Add-Ons 1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (1/3)
      </label>
      <div className="space-y-4">
      <select
        id="Add-Ons 1"
        name="Add-Ons 1"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns1 || ""}
        onChange={(e) => updateForm({ addOns1: e.target.value })}
      >
        <option value="">Select an add-on</option>
        <option value="Basil">Basil</option>
        <option value="Diced Red Onion">Diced Red Onion</option>
        <option value="Herbed Artichokes">Herbed Artichokes</option>
        <option value="Mixed Peppers">Mixed Peppers</option>
        <option value="Mushroom">Mushroom</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Ranch Dressing">Ranch Dressing</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="Sliced Jalapeno">Sliced Jalapeno</option>
        <option value="None">None</option>

      </select>
      </div>
      <label htmlFor="Add-Ons 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (2/3)
      </label>
      <div className="space-y-4">
      <select
        id="Add-Ons 2"
        name="Add-Ons 2"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns2 || ""}
        onChange={(e) => updateForm({ addOns2: e.target.value })}
      >
        <option value="">Select an add-on</option>
        <option value="Basil">Basil</option>
        <option value="Diced Red Onion">Diced Red Onion</option>
        <option value="Herbed Artichokes">Herbed Artichokes</option>
        <option value="Mixed Peppers">Mixed Peppers</option>
        <option value="Mushroom">Mushroom</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Ranch Dressing">Ranch Dressing</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="Sliced Jalapeno">Sliced Jalapeno</option>
        <option value="None">None</option>

      </select>
      </div>
      <label htmlFor="addOns3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
    Add-Ons (3/3)
    </label>
    <div className="space-y-4">
    <select
    id="addOns3"
    name="addOns3"
    className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    value={form.addOns3 || ""}
    onChange={(e) => updateForm({ addOns3: e.target.value })}
    >
    <option value="">Select an add-on</option>
    <option value="Basil">Basil</option>
    <option value="Diced Red Onion">Diced Red Onion</option>
    <option value="Herbed Artichokes">Herbed Artichokes</option>
    <option value="Mixed Peppers">Mixed Peppers</option>
    <option value="Mushroom">Mushroom</option>
    <option value="Pineapple">Pineapple</option>
    <option value="Ranch Dressing">Ranch Dressing</option>
    <option value="Sliced Black Olives">Sliced Black Olives</option>
    <option value="Sliced Jalapeno">Sliced Jalapeno</option>
    <option value="None">None</option>

    </select>
    </div>
    </div>
    );
    }

export function BuildYourOwnSandwich({ form, updateForm }) {
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const newValues = checked
          ? [...(form[name] || []), value]
          : (form[name] || []).filter((v) => v !== value);
        updateForm({ [name]: newValues });
      };
      const options = [
        "Balsamic Vinaigrette", "Deli Mustard", "Mayonnaise", "Olive Oil", 
        "Pesto Sauce", "Red Wine Vinegar", "Sun-Dried Tomato Pesto", 
        "Vegan Mayonnaise", "None"
      ];
    return (
        <div className="space-y-4">
        <label htmlFor="Bread" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Bread
      </label>
        <div className="space-y-4">
        <select
            id="Bread"
            name="Bread"
            className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={form.bread || ""}
            onChange={(e) => updateForm({ bread: e.target.value })}
        >
            <option value="">Select a bread</option>
            <option value="Artisan Rye Bread">Artisan Rye Bread</option>
            <option value="White Hoagie Torpedo Roll">White Hoagie Torpedo Roll</option>
            <option value="White Sourdough Bread">White Sourdough Bread</option>
            <option value="Whole Wheat Sourdough Bread">Whole Wheat Sourdough Bread</option>
      </select>
      </div>
      <label htmlFor="Cheese" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Cheese
      </label>
      <div className="space-y-4">
      <select
        id="Cheese"
        name="Cheese"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.cheese || ""}
        onChange={(e) => updateForm({ cheese: e.target.value })}
      >
        <option value="">Select a cheese</option>
        <option value="Cheddar Cheese">Cheddar Cheese</option>
        <option value="Mozzarella Cheese">Mozzarella Cheese</option>
        <option value="Provolone Cheese">Provolone Cheese</option>
        <option value="Vegan Cheddar Cheese">Vegan Cheddar Cheese</option>
        <option value="None">None</option>
      </select>
      </div>
      <label htmlFor="Topping" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Topping
      </label>
      <div className="space-y-4">
      <select
        id="Topping"
        name="Topping"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.topping || ""}
        onChange={(e) => updateForm({ topping: e.target.value })}
      >
        <option value="">Select a topping</option>
        <option value="Avocado Pulp">Avocado Pulp</option>
        <option value="Bacon">Bacon</option>
        <option value="Black Forest Ham">Black Forest Ham</option>
        <option value="Egg Salad">Egg Salad</option>
        <option value="Grilled Rosemary Chicken Breast">Grilled Rosemary Chicken Breast</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Prosciutto">Prosciutto</option>
        <option value="Roast Beef">Roast Beef</option>
        <option value="Turkey">Turkey</option>
        <option value="Vegan Sausage">Vegan Sausage</option>
        <option value="None">None</option>
      </select>
      </div>
      <label htmlFor="Add-Ons 1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (1/3)
      </label>
      <div className="space-y-4">
      <select
        id="Add-Ons 1"
        name="Add-Ons 1"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns1 || ""}
        onChange={(e) => updateForm({ addOns1: e.target.value })}
      >
        <option value="">Select an add-on</option>
        <option value="Baby Spinach">Baby Spinach</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Mixed Peppers">Mixed Peppers</option>
        <option value="Olive Salad">Olive Salad</option>
        <option value="Pepperoncini">Pepperoncini</option>
        <option value="Pickles">Pickles</option>
        <option value="Red Onion">Red Onion</option>
        <option value="Romaine Lettuce">Romaine Lettuce</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="Sliced Jalapeno">Sliced Jalapeno</option>
        <option value="Tomatoes">Tomatoes</option>
        <option value="None">None</option>
      </select>
      </div>
      <label htmlFor="Add-Ons 2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (2/3)
      </label>
      <div className="space-y-4">
      <select
        id="Add-Ons 2"
        name="Add-Ons 2"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns2 || ""}
        onChange={(e) => updateForm({ addOns2: e.target.value })}
      >
        <option value="">Select an add-on</option>
        <option value="Baby Spinach">Baby Spinach</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Mixed Peppers">Mixed Peppers</option>
        <option value="Olive Salad">Olive Salad</option>
        <option value="Pepperoncini">Pepperoncini</option>
        <option value="Pickles">Pickles</option>
        <option value="Red Onion">Red Onion</option>
        <option value="Romaine Lettuce">Romaine Lettuce</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="Sliced Jalapeno">Sliced Jalapeno</option>
        <option value="Tomatoes">Tomatoes</option>
        <option value="None">None</option>
      </select>
      </div>
      <label htmlFor="Add-Ons 3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (3/3)
      </label>
      <div className="space-y-4">
      <select
        id="Add-Ons 3"
        name="Add-Ons 3"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns3 || ""}
        onChange={(e) => updateForm({ addOns3: e.target.value })}
      >
        <option value="">Select an add-on</option>
        <option value="Baby Spinach">Baby Spinach</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Mixed Peppers">Mixed Peppers</option>
        <option value="Olive Salad">Olive Salad</option>
        <option value="Pepperoncini">Pepperoncini</option>
        <option value="Pickles">Pickles</option>
        <option value="Red Onion">Red Onion</option>
        <option value="Romaine Lettuce">Romaine Lettuce</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="Sliced Jalapeno">Sliced Jalapeno</option>
        <option value="Tomatoes">Tomatoes</option>
        <option value="None">None</option>
      </select>
      </div>
      <label className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Spreads & Condiments (multiple)
      </label>
      {options.map((option) => (
        <div key={option} className="mt-1">
          <input
            type="checkbox"
            name="spreadsCondiments"
            value={option}
            checked={(form.spreadsCondiments || []).includes(option)}
            onChange={handleCheckboxChange}
            className="mr-2 rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label className="text-sm leading-6 text-slate-900">{option}</label>
        </div>
      ))}
    </div>
    );
    }

export function BuildYourOwnStudySalad({ form, updateForm }) {
    return (
        <div className="space-y-4">
        <label htmlFor="greens" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Greens
      </label>
      <div className="space-y-4">
      <select
        id="greens"
        name="greens"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.greens || ""}
        onChange={(e) => updateForm({ greens: e.target.value })}
      >
        <option value="">Select greens</option>
        <option value="Baby Spinach">Baby Spinach</option>
        <option value="Mesclun Mix Lettuce">Mesclun Mix Lettuce</option>
        <option value="Power Green Blend">Power Green Blend</option>
        <option value="Romaine Lettuce">Romaine Lettuce</option>
      </select>
    </div>
      <label htmlFor="toppings14" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Toppings (1/4)
      </label>
      <div className="space-y-4">
      <select
        id="toppings14"
        name="toppings14"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.toppings14 || ""}
        onChange={(e) => updateForm({ toppings14: e.target.value })}
      >
        <option value="">Select a topping</option>
        <option value="Black Lentils">Black Lentils</option>
        <option value="Bleu Cheese">Bleu Cheese</option>
        <option value="Candied Walnuts">Candied Walnuts</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Diced Red Onion">Diced Red Onion</option>
        <option value="Dried Cranberries">Dried Cranberries</option>
        <option value="Farro">Farro</option>
        <option value="Feta Cheese">Feta Cheese</option>
        <option value="Garbanzo Beans">Garbanzo Beans</option>
        <option value="Goat Cheese">Goat Cheese</option>
        <option value="Grape Tomatoes">Grape Tomatoes</option>
        <option value="Hard Boiled Egg">Hard Boiled Egg</option>
        <option value="Herbed Artichokes">Herbed Artichokes</option>
        <option value="Roasted Golden Beets">Roasted Golden Beets</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="None">None</option>
      </select>
    </div>
    <label htmlFor="toppings2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
    Toppings (2/4)
    </label>
    <div className="space-y-4">
    <select
    id="toppings2"
    name="toppings2"
    className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    value={form.toppings2 || ""}
    onChange={(e) => updateForm({ toppings2: e.target.value })}
    >
    <option value="">Select a topping</option>
        <option value="Black Lentils">Black Lentils</option>
        <option value="Bleu Cheese">Bleu Cheese</option>
        <option value="Candied Walnuts">Candied Walnuts</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Diced Red Onion">Diced Red Onion</option>
        <option value="Dried Cranberries">Dried Cranberries</option>
        <option value="Farro">Farro</option>
        <option value="Feta Cheese">Feta Cheese</option>
        <option value="Garbanzo Beans">Garbanzo Beans</option>
        <option value="Goat Cheese">Goat Cheese</option>
        <option value="Grape Tomatoes">Grape Tomatoes</option>
        <option value="Hard Boiled Egg">Hard Boiled Egg</option>
        <option value="Herbed Artichokes">Herbed Artichokes</option>
        <option value="Roasted Golden Beets">Roasted Golden Beets</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="None">None</option>
    </select>
    </div>
    <label htmlFor="toppings3" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
    Toppings (3/4)
    </label>
    <div className="space-y-4">
    <select
    id="toppings3"
    name="toppings3"
    className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    value={form.toppings3 || ""}
    onChange={(e) => updateForm({ toppings3: e.target.value })}
    >
    <option value="">Select a topping</option>
        <option value="Black Lentils">Black Lentils</option>
        <option value="Bleu Cheese">Bleu Cheese</option>
        <option value="Candied Walnuts">Candied Walnuts</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Diced Red Onion">Diced Red Onion</option>
        <option value="Dried Cranberries">Dried Cranberries</option>
        <option value="Farro">Farro</option>
        <option value="Feta Cheese">Feta Cheese</option>
        <option value="Garbanzo Beans">Garbanzo Beans</option>
        <option value="Goat Cheese">Goat Cheese</option>
        <option value="Grape Tomatoes">Grape Tomatoes</option>
        <option value="Hard Boiled Egg">Hard Boiled Egg</option>
        <option value="Herbed Artichokes">Herbed Artichokes</option>
        <option value="Roasted Golden Beets">Roasted Golden Beets</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="None">None</option>
    </select>
    </div>
    <label htmlFor="toppings4" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
    Toppings (4/4)
    </label>
    <div className="space-y-4">
    <select
    id="toppings4"
    name="toppings4"
    className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    value={form.toppings4 || ""}
    onChange={(e) => updateForm({ toppings4: e.target.value })}
    >
    <option value="">Select a topping</option>
        <option value="Black Lentils">Black Lentils</option>
        <option value="Bleu Cheese">Bleu Cheese</option>
        <option value="Candied Walnuts">Candied Walnuts</option>
        <option value="Cucumber Slices">Cucumber Slices</option>
        <option value="Diced Red Onion">Diced Red Onion</option>
        <option value="Dried Cranberries">Dried Cranberries</option>
        <option value="Farro">Farro</option>
        <option value="Feta Cheese">Feta Cheese</option>
        <option value="Garbanzo Beans">Garbanzo Beans</option>
        <option value="Goat Cheese">Goat Cheese</option>
        <option value="Grape Tomatoes">Grape Tomatoes</option>
        <option value="Hard Boiled Egg">Hard Boiled Egg</option>
        <option value="Herbed Artichokes">Herbed Artichokes</option>
        <option value="Roasted Golden Beets">Roasted Golden Beets</option>
        <option value="Sliced Black Olives">Sliced Black Olives</option>
        <option value="None">None</option>
    </select>
    </div>
      <label htmlFor="protein" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Protein
      </label>
      <div className="space-y-4">
      <select
        id="protein"
        name="protein"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.protein || ""}
        onChange={(e) => updateForm({ protein: e.target.value })}
      >
        <option value="">Select a protein</option>
        <option value="Avocado">Avocado</option>
        <option value="Dijon Tempeh">Dijon Tempeh</option>
        <option value="Dill Salmon">Dill Salmon</option>
        <option value="Grilled Rosemary Chicken Breast">Grilled Rosemary Chicken Breast</option>
        <option value="Peppered Steak">Peppered Steak</option>
        <option value="Vegan Sausage">Vegan Sausage</option>
        <option value="None">None</option>
      </select>
    </div>
      <label htmlFor="dressing" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Dressing
      </label>
      <div className="space-y-4">
      <select
        id="dressing"
        name="dressing"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.dressing || ""}
        onChange={(e) => updateForm({ dressing: e.target.value })}
      >
        <option value="">Select a dressing</option>
        <option value="Balsamic Vinaigrette">Balsamic Vinaigrette</option>
        <option value="Caesar Dressing">Caesar Dressing</option>
        <option value="Italian Lo-Cal Dressing">Italian Lo-Cal Dressing</option>
        <option value="Lemon Oregano Vinaigrette">Lemon Oregano Vinaigrette</option>
        <option value="Ranch Dressing">Ranch Dressing</option>
        <option value="Roasted Red Pepper Dressing">Roasted Red Pepper Dressing</option>
        <option value="None">None</option>
      </select>
    </div>
      <label htmlFor="croutons" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Croutons
      </label>
      <div className="space-y-4">
      <select
        id="croutons"
        name="croutons"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.croutons || ""}
        onChange={(e) => updateForm({ croutons: e.target.value })}
      >
        <option value="">Select croutons</option>
        <option value="Cheese & Garlic Croutons">Cheese & Garlic Croutons</option>
        <option value="None">None</option>
      </select>
        </div>
        </div>
    );
    }

export function BuildYourOwnBreakfastSkillet({ form, updateForm }) {
    return (
        <div className="space-y-4">
        <label htmlFor="eggs" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Eggs
        </label>
        <div className="space-y-4">
        <select
        id="eggs"
        name="eggs"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.eggs || ""}
        onChange={(e) => updateForm({ eggs: e.target.value })}
        >
            <option value="">Select type of eggs</option>
            <option value="Fried Eggs Sunny Side Up">Fried Eggs Sunny Side Up</option>
            <option value="JUST Egg">JUST Egg</option>
            <option value="Poached Eggs">Poached Eggs</option>
            <option value="Scrambled Egg Whites">Scrambled Egg Whites</option>
            <option value="Scrambled Eggs">Scrambled Eggs</option>
            <option value="Tofu Mushroom Scramble">Tofu Mushroom Scramble</option>
            <option value="None">None</option>
        </select>
        </div>
        <label htmlFor="topping" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Topping
        </label>
        <div className="space-y-4">
        <select
        id="topping"
        name="topping"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.topping || ""}
        onChange={(e) => updateForm({ topping: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Avocado">Avocado</option>
            <option value="Bacon">Bacon</option>
            <option value="Black Forest Ham">Black Forest Ham</option>
            <option value="Chicken Schnitzel">Chicken Schnitzel</option>
            <option value="Smoked Polish Sausage">Smoked Polish Sausage</option>
            <option value="None">None</option>
        </select>
        </div>
        </div>
    );
    }

export function BuildYourOwnBagel({ form, updateForm }) {
    return (
        <div className="space-y-4">
        
        <label htmlFor="bagel" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Bagel
        </label>
        <div className="space-y-4">
        <select
        id="bagel"
        name="bagel"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.bagel || ""}
        onChange={(e) => updateForm({ bagel: e.target.value })}
        >
            <option value="">Select a bagel</option>
            <option value="Butter Croissant">Butter Croissant</option>
            <option value="Cinnamon Raisin Bagel">Cinnamon Raisin Bagel</option>
            <option value="Everything Bagel">Everything Bagel</option>
            <option value="Onion Bagel">Onion Bagel</option>
            <option value="Plain Bagel">Plain Bagel</option>
            <option value="Wheat Bagel">Wheat Bagel</option>
            </select>
        </div>
        <label htmlFor="topping" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Topping
        </label>
        <div className="space-y-4">
        <select
        id="topping"
        name="topping"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.topping || ""}
        onChange={(e) => updateForm({ topping: e.target.value })}
        >
            <option value="">Select a topping</option>
            <option value="Avocado Pulp">Avocado Pulp</option>
            <option value="Bacon">Bacon</option>
            <option value="Black Forest Ham">Black Forest Ham</option>
            <option value="Egg Salad">Egg Salad</option>
            <option value="JUST Egg">JUST Egg</option>
            <option value="Over Easy Egg">Over Easy Egg</option>
            <option value="Smoked Pacific Steelhead Salmon Trout">Smoked Pacific Steelhead Salmon Trout</option>
            <option value="Turkey">Turkey</option>
            <option value="None">None</option>
            </select>
            </div>
        <label htmlFor="cheese" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Spread or Sliced Cheese
        </label>
        <div className="space-y-4">
        <select
        id="cheese"
        name="cheese"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.cheese || ""}
        onChange={(e) => updateForm({ cheese: e.target.value })}
        >
            <option value="">Select a spread or sliced cheese</option>
            <option value="Avocado Cream Cheese">Avocado Cream Cheese</option>
            <option value="Cheddar Cheese">Cheddar Cheese</option>
            <option value="Chocolate Cream Cheese">Chocolate Cream Cheese</option>
            <option value="Cream Cheese">Cream Cheese</option>
            <option value="Dill & Shallot Cream Cheese">Dill & Shallot Cream Cheese</option>
            <option value="Non-Dairy Cream Cheese">Non-Dairy Cream Cheese</option>
            <option value="Sun-Dried Tomato Cream Cheese">Sun-Dried Tomato Cream Cheese</option>
            <option value="Vegan Cheddar Cheese">Vegan Cheddar Cheese</option>
            <option value="None">None</option>
        </select>
        </div>
        <label htmlFor="addOns1" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (1/2)
        </label>
        <div className="space-y-4">
        <select
        id="addOns1"
        name="addOns1"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns1 || ""}
        onChange={(e) => updateForm({ addOns1: e.target.value })}
        >
            <option value="">Select an add-on</option>
            <option value="Baby Arugula">Baby Arugula</option>
            <option value="Baby Spinach">Baby Spinach</option>
            <option value="Capers">Capers</option>
            <option value="Cucumber Slices">Cucumber Slices</option>
            <option value="Mixed Peppers">Mixed Peppers</option>
            <option value="Pickles">Pickles</option>
            <option value="Red Onion">Red Onion</option>
            <option value="Sliced Black Olives">Sliced Black Olives</option>
            <option value="Sliced Jalapeno">Sliced Jalapeno</option>
            <option value="Tomatoes">Tomatoes</option>
            <option value="None">None</option>
        </select>
        </div>
        <label htmlFor="addOns2" className="block text-sm font-medium leading-6 text-slate-900 mt-4" style={{ fontSize: '20px' }}>
        Add-Ons (2/2)
        </label>
        <div className="space-y-4">
        <select
        id="addOns2"
        name="addOns2"
        className="block w-full mt-1 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={form.addOns2 || ""}
        onChange={(e) => updateForm({ addOns2: e.target.value })}
        >
            <option value="">Select an add-on</option>
            <option value="Baby Arugula">Baby Arugula</option>
            <option value="Baby Spinach">Baby Spinach</option>
            <option value="Capers">Capers</option>
            <option value="Cucumber Slices">Cucumber Slices</option>
            <option value="Mixed Peppers">Mixed Peppers</option>
            <option value="Pickles">Pickles</option>
            <option value="Red Onion">Red Onion</option>
            <option value="Sliced Black Olives">Sliced Black Olives</option>
            <option value="Sliced Jalapeno">Sliced Jalapeno</option>
            <option value="Tomatoes">Tomatoes</option>
            <option value="None">None</option>
        </select>
        </div>
        </div>
    );
    }