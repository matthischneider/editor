<script lang="ts">
	import type { Shape } from './Geometry';
    import { Vector } from './Geometry';

	export let from: Shape | null = null;
	export let to: Shape | null = null;

    export let hasArrow: boolean = true;
    export let bidirectional: boolean = false;

    $: fromdirection = getDirection(from, to);
    $: todirection = getDirection(to, from);

    $: fromDirectionVector = getDirectionVector(fromdirection).multiply(10);
    $: toDirectionVector = getDirectionVector(todirection).multiply(10);

    $: fromControlPoint = fromPoint.add(fromDirectionVector.multiply(5));
    $: toControlPoint = toPoint.add(toDirectionVector.multiply(5));

	$: fromPoint = getStartPoint(from, fromdirection);
	$: toPoint = getStartPoint(to, todirection);


	function getStartPoint (shape: Shape | null, direction: string) : Vector{
		if (!shape?.location) 
            return new Vector(0, 0);

        switch(direction) {
            case 'top':
                return new Vector(shape.location.x + shape.width / 2, shape.location.y);
            case 'bottom':
                return new Vector(shape.location.x + shape.width / 2, shape.location.y + shape.height);
            case 'left':
                return new Vector(shape.location.x, shape.location.y + shape.height / 2);
            default:
                return new Vector(shape.location.x + shape.width, shape.location.y + shape.height / 2);

        }
	}

    function getDirection(from : Shape|null, to : Shape|null): string {
        if (!from || !to) {
            return 'right';
        }
        
        const fromCenter = from.location.add(new Vector(from.width / 2, from.height / 2));
        const toCenter = to.location.add(new Vector(to.width / 2, to.height / 2));

        const direction = toCenter.subtract(fromCenter);

        if (Math.abs(direction.x) > Math.abs(direction.y)) {
            return direction.x > 0 ? 'right' : 'left';
        } else {
            return direction.y > 0 ? 'bottom' : 'top';
        }

        
    }

    function getDirectionVector(direction: string) : Vector {
        switch(direction) {
            case 'top':
                return new Vector(0, -1);
            case 'bottom':
                return new Vector(0, 1);
            case 'left':
                return new Vector(-1, 0);
            default:
                return new Vector(1, 0);
        }
    }
	// 	$: console.log(moving);
</script>

{#if fromPoint && toPoint}
	<path
		d="M{fromPoint.x} {fromPoint.y} 
            l{fromDirectionVector.x} {fromDirectionVector.y}
            C{fromControlPoint.x} {fromControlPoint.y} , 
            {toControlPoint.x} {toControlPoint.y}, 
            {toPoint.x+toDirectionVector.x} {toPoint.y+toDirectionVector.y}
            l{-toDirectionVector.x} {-toDirectionVector.y}"
            class="text-gray-900 dark:text-white stroke-2 fill-none"
        marker-end={hasArrow ? 'url(#endarrow)' : undefined}
        marker-start={bidirectional ? 'url(#startarrow)' : undefined}
	/>
{/if}
